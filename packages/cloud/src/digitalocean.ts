import {
  Cdn,
  type CdnArgs,
  Certificate,
  DnsRecord,
  type DnsRecordArgs,
  Domain,
  type DomainArgs,
  DropletSlug,
  KubernetesCluster,
  type KubernetesClusterArgs,
  Project,
  type ProjectArgs,
  SpacesBucket,
  type SpacesBucketArgs,
  SpacesBucketPolicy,
  SshKey,
} from '@pulumi/digitalocean'
import { Input, Output } from '@pulumi/pulumi'
import { PrivateKey } from '@pulumi/tls'

type ResourceID = 'provider' | 'cluster' | 'storage' | 'cdn' | 'dns' | 'ssh-key' | 'project' | 'certificate' | 'policy'

function getCmsPolicy(bucket: string | Input<string>) {
  return {
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'CmsPublicAccess',
        Effect: 'Allow',
        Action: ['s3:PutObject', 's3:GetObject', 's3:ListBucket', 's3:DeleteObject', 's3:PutObjectAcl'],
        Resource: [`arn:aws:s3:::${bucket}`, `arn:aws:s3:::${bucket}/*`],
      },
    ],
  }
}

export function run({
  name,
  region,
  environment,
  tags,
  domain,
}: {
  name: string
  environment: string
  tags: string[]
  region: string
  domain: string
}) {
  function urn(resource: ResourceID, ...tags: string[]) {
    return [['bn', name, environment].join(':'), [resource as string].concat(tags).filter(Boolean).join(':')].join('/')
  }
  /**
   * Create a DigitalOcean Spaces bucket required for CMS uploads and assets
   * @param {Domain} domain
   */
  function createBucket(domain?: string): SpacesBucket {
    const bucket = new SpacesBucket(
      urn('storage', 'cms'),
      {
        acl: 'public-read',
        name: `${name}-cms`,
        region,
        versioning: { enabled: false },
        forceDestroy: true,
      },
      { ignoreChanges: ['name', 'region'] as (keyof SpacesBucketArgs)[] }
    )
    new SpacesBucketPolicy(
      urn('storage', 'cms', 'policy'),
      { policy: JSON.stringify(getCmsPolicy(`${name}-cms`)), region, bucket: `${name}-cms` },
      {
        dependsOn: [bucket],
      }
    )
    if (domain) {
      const cdnRecord = new DnsRecord(
        urn('storage', 'cms', 'cdn', 'dns'),
        { type: 'CNAME', name: 'cdn', value: bucket.bucketDomainName.apply(fqdn => `${fqdn}.`), domain },
        {
          ignoreChanges: [] as (keyof DnsRecordArgs)[],
        }
      )
      const certificate = new Certificate(
        urn('storage', 'cms', 'cdn', 'certificate'),
        {
          domains: [`cdn.${domain}`],
          name,
          type: 'lets_encrypt',
        },
        { ignoreChanges: ['name'] as (keyof DomainArgs)[], dependsOn: [cdnRecord] }
      )
      new Cdn(
        urn('storage', 'cms', 'cdn'),
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
    return new Domain(urn('dns'), {
      name,
    })
  }

  /**
   * @param {string} name
   */
  function createCluster(name: string): KubernetesCluster {
    return new KubernetesCluster(
      urn('cluster'),
      {
        ha: false,
        surgeUpgrade: true,
        autoUpgrade: false,
        name,
        nodePool: {
          name: 'workers',
          size: DropletSlug.DropletS2VCPU4GB_INTEL,
          minNodes: 1,
          maxNodes: 2,
          autoScale: true,
        },
        region,
        version: '1.25.4-do.0',
        tags,
      },
      { ignoreChanges: ['name', 'version', 'region'] as (keyof KubernetesClusterArgs)[] }
    )
  }
  function createProject(...resources: Output<string>[]): Project {
    return new Project(
      urn('project'),
      {
        environment,
        name,
        purpose: 'Web Application',
        resources,
      },
      { ignoreChanges: [] as (keyof ProjectArgs)[] }
    )
  }
  function createSshKey(): SshKey {
    const key = new PrivateKey('private-key', { algorithm: 'rsa', rsaBits: 3 * 1024 })
    return new SshKey(
      urn('ssh-key'),
      {
        name: 'pulumi',
        publicKey: key.publicKeyPem,
      },
      { ignoreChanges: [] as (keyof ProjectArgs)[] }
    )
  }
  createProject()
  createSshKey()
  createCluster(name)
  createDomain(domain).name.apply(createBucket)
}
