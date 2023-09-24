<!-- @format -->

# City Walks Client

This is a React/Redux client built to interact with the express server contained in [this repository](https://github.com/mike1234-pixel/city-walks).

## Getting Started

### 1) Server

Clone the repo:

`gh repo clone mike1234-pixel/city-walks`

To install dependencies, cd into the root directory and run:

`yarn add`

To start the API run:

`yarn server`

### 2) Client

Clone the repo:

`gh repo clone mike1234-pixel/city-walks-client`

To install dependencies, move into the **client** directory and run:

`npm install`

To start the development server, move into the **client** directory and run:

`npm start`

## State Management

Global state is managed by **redux** and **react-redux**.

State is managed locally by components in cases where state is only required locally, such as in **./src/components/pages/Admin/Admin.jsx**. **React Hooks** are used for this purpose.

## Typescript

Typescript is used across the application and most types can be found in the `types` directory.

In some cases where the type is tightly coupled to the componenent and will only be used once, the type is declared and assigned in the component file, e.g. a component's Props. In most cases however, types are contained in the `types` directory in order to separate concerns.

## Ajax

Ajax requests are made using the **axios** and **qs** packages. Requests for global app data are made inside action creators with the help of **redux-thunk**.

## Text Formatting

Text can be saved to the database with Markdown formatting. This will be parsed on the client using the **marked** package. This applies only when adding a new Walk or Sight.

## Routing

Routing is handled by **react-router-dom**.

Dynamic routing is generated for the `Threads`, `Sight` and `Walk` components.

Routing logic can be found in the `Router` component in **./src/container/Router/Router.tsx**.

## CSS Preprocessor

This app uses the SCSS version of Sass which is compiled using **node-sass** and **sass-loader**.

## Maps

The **react-hook-google-maps** package handles the connection to the Google JavaScript Maps API.

## Testing

**Jest** is used for the tests, along with **react-testing-library** for integration tests.

To run the tests, run:

`npm test`

To run tests for a single component run:

`npm test <ComponentName>`

## Deploying

The live site is on Github Pages. To deploy your changes, ensure `main` branch is up to date and run `npm run deploy`. This will update the build on the live `gh-pages` branch.

## Content Management System

The app contains a content management system which can be accessed using the Admin Login link in the footer. This requires an administrator account.
