# CI/CD Worklow

We Utilize GitHub workflows inorder to automate our code deployment. We store private information, such as AWS keys as GitHub

## Staging Environment

When we merge into master our staging environment updates.
This includes these steps:

- Postgraphile - Our Backend is build into a docker image and re-initialized in our Cluster Service
- Terraform - Provisions changes to our Infrastructure
- Sqitch - Deploys database migration
- PWA - Builds React application and pushes the static files to our S3 service
- Our Serverless Lambda Applications are being re-uploaded (which also updates the Maya Submitter)

All of these processes only runs if there are changes within the path. So if the is only changes in the codebase within the packages/pwa folder structure, then the PWA job will be the only one to run.

## Production Environment

At the state of writing, the Github Workflows for the release of our production environment has not been writtin as of yet.
However, there is a few things I'd love to keep in mind when the time comes.

- Everything should be executed as one job, and rolled back if all tests performed a not matching.
- We can apply an extra level of testing that works thoroughly through our staging environment
- Cut a release when merged into the release branch