# Technologies

Here is a complete list of technologies we utilize for Framethrower.io

## Worfklow

- [Lerna](https://github.com/lerna/lerna) - The main mono repo is managed by Lerna
- [Github Actions](https://github.com/features/actions) - is utilized for running tests, builds, and CI/CD

## Cloud & Infrastructure

- [AWS](https://aws.amazon.com/) - Is the backbone of our cloud infrastructure
- [Terraform](https://www.terraform.io/) - Is the tool utilised to plan and provision cloud infrastructure
- [Docker](https://www.docker.com/) - used for building images which are deployed to our ECR service on AWS. We also utilize docker-compose for local development

## Backend

- [PostgresQL](https://www.postgresql.org/) - Is not only our database, but also utilises PL/pgSQL as our main approach to our business logic
- [Serverless](https://www.serverless.com/) - Is a framework to deploy lambda functions, which we utilise for heavy lifting functionality
- [Ffmpeg](https://ffmpeg.org/) - We utilize to Ffmpeg and FFprobe libraries to generate thumbnails from uploaded animations, as well as verification of valid file info
- [redis](https://redis.io/) - We will implement redis as an in-memory cache to keep track of blacklisted JWT tokens
- [Sqitch](https://sqitch.org/) - Is used for database migration
- [Postgraphile](https://www.graphile.org/postgraphile/) - Is a node middleware which build our GraphQL API from introspecting the PG Schema
- [Stripe](https://stripe.com/) - Stripe is our payment platform of choice
- [Mux Video](https://mux.com/) - We utilize Mux to transcode our longer videos (Tutorials, Professional Feedback)

## Front End

- [TypeScript](https://www.typescriptlang.org/) - Superset of Javascript to apply typesafety for our code and imported modules
- [React](https://reactjs.org/) - JS Framework
- [StoryBook](https://storybook.js.org/) - Tool for developing UI components in isolation
- [React Router](https://reactrouter.com/) - Client side routing
- [React Hook Form](https://react-hook-form.com/) - Performant and easy-to-use Form validation
- [Apollo Client](https://www.apollographql.com/docs/react/get-started/) - GraphQL and cached data management
- [Tailwind CSS](https://tailwindcomponents.com/) - Tailwind CSS Framework
- [Webpack](https://webpack.js.org/) - Is our Javascript bundler we use to build our front end application

## Maya Integration

- [Maya CMDS](https://help.autodesk.com/cloudhelp/2018/ENU/Maya-Tech-Docs/CommandsPython/) - Maya Commands Python Wrapper to execute things in Maya
- [PyQt](https://help.autodesk.com/view/MAYAUL/2020/ENU/?guid=__developer_Maya_SDK_MERGED_Maya_Python_API_Working_with_PySide_in_Maya_html) - We utilize the PyQt framework inside of maya (PySide2)

## Testing

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Easy testing of React Application
- [Betterer](https://phenomnomnominal.github.io/betterer/) - Keeps track of incremental improvements.
- [Jest](https://jestjs.io/) - Jest is our unit testing framework of choice
- [Cypress](https://jestjs.io/) - Cypress is our integration testing framework of choice
- [Puppetter](https://developers.google.com/web/tools/puppeteer) - We utilize Puppetter for end-to-end testing
- [pgTap](https://pgtap.org/documentation.html) - Testing postgres
