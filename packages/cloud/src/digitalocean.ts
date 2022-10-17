import {
  type CdnArgs,
  type DnsRecordArgs,
  type DomainArgs,
  type KubernetesClusterArgs,
  type ProjectArgs,
  type SpacesBucketArgs,
  Cdn,
  Certificate,
  DnsRecord,
  Domain,
  KubernetesCluster,
  Project,
  SpacesBucket,
  SpacesBucketPolicy,
} from '@pulumi/digitalocean'
import { Input } from '@pulumi/pulumi'

import packageMetadata from '../package.json'

const name = `${process.env.APP_NAME ?? packageMetadata.name.split('/')[0].replace('@', '')}` as const
const region = `${process.env.REGION ?? 'fra1'}` as const
const version = `${process.env.KUBERNETES_VERSION ?? '1.24.4-do.0'}` as const
const environment = `${process.env.APP_ENV ?? 'production'}` as const
const dnsZone = 'bndigital.ai'
const dns = `${process.env.APP_DOMAIN ?? [name, dnsZone].join('.')}` as const
type ResourceID = 'provider' | 'cluster' | 'storage' | 'cdn' | 'dns' | 'project' | 'certificate' | 'policy'

function urn(resource: ResourceID, ...tags: string[]) {
  return [['bn', name, environment].join(':'), [resource as string].concat(tags).filter(Boolean).join(':')].join('/')
}

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

export function run(name: string) {
  const tags = ['provisioner:pulumi', `environment:${environment}`, `app:${name}`]
  const cluster = new KubernetesCluster(
    urn('cluster'),
    {
      ha: false,
      surgeUpgrade: true,
      autoUpgrade: false,
      name,
      nodePool: { name: 'workers', size: 's-1vcpu-2gb-intel', minNodes: 1, maxNodes: 2, autoScale: true },
      region,
      version,
      tags,
    },
    { ignoreChanges: ['name', 'version', 'region'] as (keyof KubernetesClusterArgs)[] },
  )

  const bucket = new SpacesBucket(
    urn('storage', 'cms'),
    {
      acl: 'public-read',
      name: `${name}-cms`,
      region,
      versioning: { enabled: false },
      forceDestroy: true,
    },
    { ignoreChanges: ['name', 'region'] as (keyof SpacesBucketArgs)[] },
  )

  const policy = new SpacesBucketPolicy(
    urn('storage', 'cms', 'policy'),
    { policy: JSON.stringify(getCmsPolicy(`${name}-cms`)), region, bucket: `${name}-cms` },
    {
      dependsOn: [bucket],
    },
  )
  const domain = new Domain(urn('dns'), {
    name: dns,
  })
  const cdnRecord = new DnsRecord(
    urn('storage', 'cms', 'cdn', 'dns'),
    { type: 'CNAME', name: 'cdn', value: bucket.bucketDomainName.apply(fqdn => `${fqdn}.`), domain: dns },
    {
      ignoreChanges: [] as (keyof DnsRecordArgs)[],
      dependsOn: [domain],
    },
  )
  const certificate = new Certificate(
    urn('storage', 'cms', 'cdn', 'certificate'),
    {
      domains: [`cdn.${dns}`],
      name,
      type: 'lets_encrypt',
    },
    { ignoreChanges: ['name'] as (keyof DomainArgs)[], dependsOn: [cdnRecord] },
  )
  const cdn = new Cdn(
    urn('storage', 'cms', 'cdn'),
    {
      origin: bucket.bucketDomainName,
      customDomain: cdnRecord.fqdn,
      certificateName: certificate.name,
    },
    { ignoreChanges: [] as (keyof CdnArgs)[], dependsOn: [certificate, cdnRecord, bucket] },
  )
  return new Project(
    urn('project'),
    {
      environment,
      name,
      purpose: 'Web Application',
      resources: [cluster.clusterUrn, bucket.bucketUrn, domain.domainUrn],
    },
    { ignoreChanges: [] as (keyof ProjectArgs)[], dependsOn: [cluster, bucket, domain] },
  )
}
