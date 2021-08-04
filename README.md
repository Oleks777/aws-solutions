# Welcome

This is the repository for various AWS solutions built with Serverless Framework

## Common tech stack

1. Serverless Framework
2. Node.js
3. YAML
4. NPM


## Deploying and running example solutions

1. Make sure you have the latest Serverless Framework version installed:

    `serverless -v`

    if not, install serverless

    `npm install -g serverless`

2. Go to the solution directory and install dependencies.

    `npm install`

3. Change config in serverless.yml (if needed)
    - region
    - service name

4. Make sure you have awscli installed
    
    `aws --version`

    if not, install [awscli](https://aws.amazon.com/cli/), configure it:

    `aws configure --profile __PUT_YOUR_PROFILE_NAME_HERE__`

5. Deploy solution

    `serverless deploy --aws-profile __PUT_YOUR_PROFILE_NAME_HERE__`

6. Go to AWS UI and check the result

7. To remove stack and all resources

    `serverless remove --aws-profile __PUT_YOUR_PROFILE_NAME_HERE__`

## Proposing new solution examples

To propose new solution example, create a request

## Proposing improvements, bugfixes

To make this repository even more useful, your ideas are welcome. 
