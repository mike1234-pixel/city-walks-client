<!-- @format -->

# City Walks Client

This is a React client built to interact with the express server contained in this repository.

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

To install dependencies, cd into the **client** directory and run:

`npm install`

To start the development server cd into the **client** directory and run:

`npm start`

## State Management

Global state is managed by the **React Context API**. The context files can be found in the **context** folder in the **src** directory.

The App component is wrapped in context providers in **index.js** in the **src** directory.

State is managed locally to components in cases where state is only required locally, such as in **./src/components/pages/Admin/Admin.jsx**

The `userFirstName`, `userId` credentials and `loggedIn` state are stored in `localStorage` in `LoginContext`. When the user logs out local storage is cleared and the user state reset.

## Ajax

All ajax requests are made using the **axios** and **qs** packages.

## Text Formatting

Text can be saved to the database with Markdown formatting. This will be parsed on the client using the **marked** package. This applies only when adding a new Walk or BlogPost.

## Recaptcha

Google recaptcha is set up in **./src/components/page/Contact/Contact.jsx** withe the following code:

```javascript
window.grecaptcha.ready(() => {
  window.grecaptcha.execute(siteKey, { action: "submit" }).then((token) => {
    submitData(token);
  });
});
```

All other inputs on the app require the use of an activated account where the user's email has been verified, and so do not use recaptcha.

If the recaptcha score is less than 0.7 the server will reject the request.

## Routing

**react-router-dom** is used for routing the frontend.

Dynamic routing is generated by **react-router-dom** dom for the `Threads` and `Walk` components.

Routing logic can be found in the `Router` component in **./src/container/Router/Router.jsx**.

## CSS Preprocessor

This app uses the SCSS version of Sass which is compiled using **node-sass** and **sass-loader**.

## Maps

The **react-hook-google-maps** package handles connecting to the Google JavaScript Maps API.

## Testing

**Jest snapshot test** files are kept in the same folders as the components they test.

_Test data_ for the snapshot tests is contained within the _container directory_, so that snapshot tests can import data locally rather than making an ajax call.

**react-testing-library integration tests** for the whole app are contained within the App.test.js file.

To run the tests run:

`npm test`

To run tests for a single component run:

`npm test <ComponentName>`

## Content Management System




