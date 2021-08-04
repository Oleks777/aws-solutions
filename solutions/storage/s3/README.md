# S3 bucket setup
### with expiration policy and cors configuration

## Use Cases

- rapid s3 bucket deployment with predefined configuration

## Setup

In order to deploy simply run

 `serverless deploy`


## Output

```
Serverless: Packaging service...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
......
Serverless: Stack update finished...
Service Information
service: aws-solutions-s3
stage: dev
region: eu-central-1
stack: aws-solutions-s3-dev
resources: 3
api keys:
  None
endpoints:
  None
functions:
  None
layers:
  None
```