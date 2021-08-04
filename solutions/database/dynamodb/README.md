# Dynamodb 
### with autoscaling policy, TTL and GSI

## Use Cases

- deploy dynamodb automatically

## Setup

In order to deploy simply run. Change RCU, WCU and database name in stages/dev.yml

 `serverless deploy`


## Output

```
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Validating template...
Serverless: Updating Stack...
Service Information
service: aws-solutions-dynamodb
stage: dev
region: eu-central-1
stack: aws-solutions-dynamodb-dev
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