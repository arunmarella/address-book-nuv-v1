# Address Book

Address Book is a single page application developed with Angular 13. It was generated using Angular CLI. To get started, please follow the below steps.

## Local setup
### Prerequisites

Install Node JS 14 or higher.
Make sure you have npm 8 or higher.
Run npm install. If you are behind a corporate firewall or any other proxy, you may need corresponding npm configurations to reach npm registry.

### Development Server
Run `npm start` to start the local angular dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Application structure
Address Book application is a small app, so it has only 1 app and no libs. General principle is create a separate module based on the number of features required. Within a feature, we follow having a container-presentation style components. A container that fetches all of the data from API, and the presentation components that only deal with rendering. All services are under services folder of each feature module. If there are any true shared services they will go in a lib module shared-services.

## Tests
We will use Jest to run unit tests and Cypress for Integration tests. Implementation TBD.