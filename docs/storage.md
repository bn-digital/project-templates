# Object Storage

## S3 Bucket

For storing uploaded files and static ones any S3-compatible service could be used (AWS S3, Google Cloud Storage, DigitalOcean Spaces etc).

### AWS

AWS Bucket policy required to make files available with public urls. These are the minimum amount of permissions needed for this provider to
work.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CmsUploadAcl",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:ListBucket",
        "s3:DeleteObject",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::S3_BUCKET",
        "arn:aws:s3:::S3_BUCKET/*"
      ]
    }
  ]
}
```

Then provide following .env variables:

- `S3_ACCESS_KEY_ID`
- `S3_SECRET_ACCESS_KEY`
- `S3_BUCKET`
- `S3_REGION`