# EMR 
### enterprise level cluster data processing framework

## Use Cases

- running big data workloads on AWS EMR
- emr cluster deployment and management

## Setup

In order to deploy simply run.

 `serverless deploy`


## Output

```
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Validating template...
Serverless: Updating Stack...
Service Information
service: aws-solutions-emr
stage: dev
region: eu-central-1
stack: aws-solutions-emr-dev
resources: 59
api keys:
  emrInternalKeydev: __KEY__
endpoints:
  POST - https://__API_ID__.execute-api.eu-central-1.amazonaws.com/dev/emr/cluster/create
  POST - https://__API_ID__.execute-api.eu-central-1.amazonaws.com/dev/emr/cluster/edit/{clusterId}
  GET - https://__API_ID__.execute-api.eu-central-1.amazonaws.com/dev/emr/cluster/details/{clusterId}
  POST - https://__API_ID__.execute-api.eu-central-1.amazonaws.com/dev/emr/cluster/delete/{clusterId}
  GET - https://__API_ID__.execute-api.eu-central-1.amazonaws.com/dev/emr/cluster/list
  GET - https://__API_ID__.execute-api.eu-central-1.amazonaws.com/dev/emr/cluster/instances/{clusterId}
functions:
  createCluster: aws-solutions-emr-dev-createCluster
  editCluster: aws-solutions-emr-dev-editCluster
  getCluster: aws-solutions-emr-dev-getCluster
  deleteCluster: aws-solutions-emr-dev-deleteCluster
  listClusters: aws-solutions-emr-dev-listClusters
  getClusterInstances: aws-solutions-emr-dev-getClusterInstances
layers:
  None
Serverless: Removing old service artifacts from S3...

```