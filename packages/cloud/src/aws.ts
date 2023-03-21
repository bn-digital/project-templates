import { ec2, ecr, s3 } from '@pulumi/aws'
import { Output } from '@pulumi/pulumi'
import { PrivateKey } from '@pulumi/tls'
import * as fs from 'fs'
import * as path from 'path'

async function getUbuntuLatestAmi() {
  return await ec2.getAmi({
    mostRecent: true,
    filters: [
      {
        name: 'name',
        values: ['ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*'],
      },
      {
        name: 'virtualization-type',
        values: ['hvm'],
      },
    ],
    owners: ['099720109477'], // canonical
  })
}

function getTags(name: string) {
  return {
    Name: name,
    Environment: 'production',
    Provisioner: 'pulumi',
  }
}

function createSshKey(name: string) {
  const key = new PrivateKey('ssh-key', { rsaBits: 4096, algorithm: 'RSA' })
  const privateKeyFile = path.join(process.cwd(), '.secrets', 'id_rsa')
  const publicKeyFile = path.join(process.cwd(), '.secrets', 'id_rsa.pub')
  if (!fs.existsSync(privateKeyFile)) {
    key.privateKeyOpenssh.apply(content => fs.writeFileSync(privateKeyFile, content, { mode: 400 }))
  }
  if (!fs.existsSync(publicKeyFile)) {
    key.publicKeyOpenssh.apply(content => fs.writeFileSync(publicKeyFile, content, { mode: 400 }))
  }
  return new ec2.KeyPair('ssh-key', {
    keyName: name,
    publicKey: key.publicKeyOpenssh,
    tags: getTags(name),
  })
}

function createContainerRegistry(name: string) {
  return new ecr.Repository('repository', {
    name,
    imageTagMutability: 'MUTABLE',
    imageScanningConfiguration: {
      scanOnPush: true,
    },
    tags: getTags(name),
  })
}

function createSecurityGroup(name: string) {
  return new ec2.SecurityGroup('security-group', {
    name,
    description: 'Allow SSH and HTTP access',
    ingress: [
      { protocol: 'tcp', fromPort: 22, toPort: 22, cidrBlocks: ['0.0.0.0/0'] },
      { protocol: 'tcp', fromPort: 80, toPort: 80, cidrBlocks: ['0.0.0.0/0'] },
      { protocol: 'tcp', fromPort: 443, toPort: 443, cidrBlocks: ['0.0.0.0/0'] },
    ],
    egress: [{ protocol: '-1', fromPort: 0, toPort: 0, cidrBlocks: ['0.0.0.0/0'] }],
    tags: getTags(name),
  })
}

function createInstance(name: string, securityGroupId: Output<string> | string, sshKeyId: Output<string> | string) {
  return new ec2.Instance('instance', {
    ami: getUbuntuLatestAmi().then(ubuntu => ubuntu.id),
    instanceType: 't3.medium',
    associatePublicIpAddress: true,
    keyName: sshKeyId,
    vpcSecurityGroupIds: [securityGroupId],
    tags: getTags(name),
  })
}

function getCmsPolicy(bucket: string): ConstructorParameters<typeof s3.BucketPolicy>[1]['policy'] {
  return {
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'CmsPublicAccess',
        Effect: 'Allow',
        Principal: '*',
        Action: ['s3:PutObject', 's3:GetObject', 's3:ListBucket', 's3:DeleteObject', 's3:PutObjectAcl'],
        Resource: [`arn:aws:s3:::${bucket}`, `arn:aws:s3:::${bucket}/*`],
      },
    ],
  }
}

function createS3Bucket(name: string) {
  return new s3.Bucket('bucket', {
    bucket: name,
    versioning: { enabled: false },
    policy: getCmsPolicy(name),
    tags: getTags(name),
  })
}

function run({ name }: { name: string; tags: Record<string, string> }) {
  createContainerRegistry(name)
  createS3Bucket(name)
  createSecurityGroup(name).id.apply(securityGroupId =>
    createSshKey(name).id.apply(sshKeyId => createInstance(name, securityGroupId, sshKeyId))
  )
}

export { run }
