# VPC 
### with multiple subnets, routing tables, IGW, SG and elastic IP

## Use Cases

- deploy VPC automatically

## Setup

In order to deploy simply run. CIDR blocks can be adjusted in stages/dev.yml

 `serverless deploy`


## Output

```
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Validating template...
Serverless: Updating Stack...
Service Information
service: aws-solutions-vpc
stage: dev
region: eu-central-1
stack: aws-solutions-vpc-dev
resources: 5
api keys:
  None
endpoints:
  None
functions:
  None
layers:
  None

```