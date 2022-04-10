import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./container/App.jsx";
import registerServiceWorker from './registerServiceWorker';
import { SearchContextProvider } from "./context/SearchContext"
import { LoginContextProvider } from "./context/LoginContext"
import { BrowserRouter as Router } from "react-router-dom"
import store from './store';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Router>
    <LoginContextProvider>
      <SearchContextProvider>
        {/* replace these context providers with the redux provider */}
        <Provider store={store}>
          <App />
        </Provider>
        {/* replace these context providers with the redux provider */}
      </SearchContextProvider>
    </LoginContextProvider>
  </Router>, document.getElementById('root'));


registerServiceWorker();