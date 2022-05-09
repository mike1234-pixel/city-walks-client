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

The patterns are straightforward and aim to avoid unnecessary abstraction. Action Creators for example are not included, neither are constants used to replace action types.

State is managed locally by components in cases where state is only required locally, such as in **./src/components/pages/Admin/Admin.jsx**. **React Hooks** are used for this purpose.

The `userFirstName`, `userId` credentials and `loggedIn` state are stored in **local storage**. When the user logs out local storage is cleared and the user state reset.

## Typescript

Typescript is used across the application and most types can be found in the `types` directory.

In some cases where the type is tightly coupled to the componenent and will only be used once, the type is declared and assigned in the component file, e.g. a component's Props. In most cases however, types are contained in the `types` directory in order to separate concerns.

## Ajax

Ajax requests are made using the **axios** and **qs** packages. 

## Text Formatting

Text can be saved to the database with Markdown formatting. This will be parsed on the client using the **marked** package. This applies only when adding a new Walk or Sight.

## Recaptcha

Google recaptcha is set up in **./src/components/page/Contact/Contact.jsx**.

In cases where the user is logged in with an activated account where the user's email has been verified, recaptcha is not used. 

If the recaptcha score is less than 0.7 the server will reject the request.

## Routing

Routing is handled by **react-router-dom**.

Dynamic routing is generated for the `Threads`, `Sight` and `Walk` components.

Routing logic can be found in the `Router` component in **./src/container/Router/Router.tsx**.

## CSS Preprocessor

This app uses the SCSS version of Sass which is compiled using **node-sass** and **sass-loader**.

## Maps

The **react-hook-google-maps** package handles the connection to the Google JavaScript Maps API.

## Testing

**Jest snapshot test** files are kept in the same folders as the components they test.

_Test data_ for the snapshot tests is contained within the _container directory_, so that snapshot tests can import data locally rather than making an ajax call.

**react-testing-library integration tests** for the whole app are contained within the App.test.js file.

To run the tests run:

`npm test`

To run tests for a single component run:

`npm test <ComponentName>`

## Content Management System

The app contains a content management system which can be accessed using the Admin Login link in the footer. This requires an administrator account. 




