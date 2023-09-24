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

**Switch your `node` version to `16`** (this is an older project)

To install dependencies, move into the **client** directory and run:

`npm install --legacy-peer-deps`

To start the development server, move into the **client** directory and run:

`npm start`

## State Management

State is managed by **redux** and **react-redux**.

## Typescript

Typescript is used across the application and types can be found in the `types` directory.

## Ajax

Ajax requests are made using the **axios** and **qs** packages. Requests for global app data are made inside action creators using **redux-thunk**.

## Text Formatting

Text can be saved to the database with Markdown formatting. This will be parsed on the client with the **marked** package. This applies only when adding a new Walk or Sight.

## Routing

Routing is handled by **react-router-dom**.

Dynamic routing is generated for the `Threads`, `Sight` and `Walk` components.

Routing logic can be found in **./src/container/Router/Router.tsx**.

## Maps

The **react-hook-google-maps** package handles the connection to the Google JavaScript Maps API.

## Deployment

The app is deployed on AWS Amplify.

## Content Management System

The app contains a content management system which can be accessed using the Admin Login link in the footer. This requires an administrator account.
