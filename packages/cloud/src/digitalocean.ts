import {
  Cdn,
  Certificate,
  DnsRecord,
  Domain,
  DropletSlug,
  KubernetesCluster,
  Project,
  Region,
  SpacesBucket,
  SpacesBucketPolicy,
  getKubernetesVersions,
  CdnArgs,
  DnsRecordArgs,
  DomainArgs,
  KubernetesClusterArgs,
  ProjectArgs,
  SpacesBucketArgs,
} from "@pulumi/digitalocean"
import { Config, Input, Output } from "@pulumi/pulumi"

const config = new Config()
const name = config.name
const {
  region,
  domain: dns = "",
  cdn = false,
} = config.requireObject<{ region: Region; cdn?: boolean; domain?: string }>("digitalocean")
const environment = "production"
const tags = ["provisioner:pulumi", `environment:${environment}`, `app:${name}`]

type ResourceID = "provider" | "cluster" | "storage" | "cdn" | "dns" | "project" | "certificate" | "policy"

function urn(resource: ResourceID, ...tags: string[]) {
  return [["bn", name, environment].join(":"), [resource as string].concat(tags).filter(Boolean).join(":")].join("/")
}

function getCmsPolicy(bucket: string | Input<string>) {
  return {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "CmsPublicAccess",
        Effect: "Allow",
        Action: ["s3:PutObject", "s3:GetObject", "s3:ListBucket", "s3:DeleteObject", "s3:PutObjectAcl"],
        Resource: [`arn:aws:s3:::${bucket}`, `arn:aws:s3:::${bucket}/*`],
      },
    ],
  }
}

/**
 * Create a DigitalOcean Spaces bucket required for CMS uploads and assets
 * @param {Domain} domain
 */
function createBucket(domain?: string): SpacesBucket {
  const bucket = new SpacesBucket(
    urn("storage", "cms"),
    {
      acl: "public-read",
      name: `${name}-cms`,
      region,
      versioning: { enabled: false },
      forceDestroy: true,
    },
    { ignoreChanges: ["name", "region"] as (keyof SpacesBucketArgs)[] }
  )
  new SpacesBucketPolicy(
    urn("storage", "cms", "policy"),
    { policy: JSON.stringify(getCmsPolicy(`${name}-cms`)), region, bucket: `${name}-cms` },
    {
      dependsOn: [bucket],
    }
  )
  if (cdn) {
    const cdnRecord = new DnsRecord(
      urn("storage", "cms", "cdn", "dns"),
      { type: "CNAME", name: "cdn", value: bucket.bucketDomainName.apply(fqdn => `${fqdn}.`), domain: dns },
      {
        ignoreChanges: [] as (keyof DnsRecordArgs)[],
      }
    )
    const certificate = new Certificate(
      urn("storage", "cms", "cdn", "certificate"),
      {
        domains: [`cdn.${dns}`],
        name,
        type: "lets_encrypt",
      },
      { ignoreChanges: ["name"] as (keyof DomainArgs)[], dependsOn: [cdnRecord] }
    )
    new Cdn(
      urn("storage", "cms", "cdn"),
      {
        origin: bucket.bucketDomainName,
        customDomain: cdnRecord.fqdn,
        certificateName: certificate.name,
      },
      { ignoreChanges: [] as (keyof CdnArgs)[], dependsOn: [certificate, cdnRecord, bucket] }
    )
  }

  return bucket
}

function createDomain(name: string): Domain {
  return new Domain(urn("dns"), {
    name,
  })
}

/**
 * @param  name
 * @param  version
 */
function createCluster(name: string, version: string): KubernetesCluster {
  return new KubernetesCluster(
    urn("cluster"),
    {
      ha: false,
      surgeUpgrade: true,
      autoUpgrade: false,
      name,
      nodePool: {
        name: "production",
        size: DropletSlug.DropletS2VCPU4GB_INTEL,
        minNodes: 1,
        maxNodes: 2,
        autoScale: true,
      },
      region,
      version,
      tags,
    },
    { ignoreChanges: ["name", "version", "region"] as (keyof KubernetesClusterArgs)[] }
  )
}

function createProject(resources: Output<string>[]): Project {
  return new Project(
    urn("project"),
    {
      environment,
      name,
      purpose: "Web Application",
      resources,
    },
    { ignoreChanges: [] as (keyof ProjectArgs)[] }
  )
}

export async function run() {
  const name = config.name
  const version = await getKubernetesVersions().then(versions => versions.latestVersion)
  const cluster = createCluster(name, version)
  const resources = [cluster.clusterUrn]
  let domain = undefined
  if (dns) {
    domain = createDomain(dns)
    resources.push(domain.domainUrn)
  }
  const bucket = domain?.name.apply(createBucket) || createBucket()
  resources.push(bucket.bucketUrn)
  return createProject(resources)
}
