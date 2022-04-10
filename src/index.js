import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./container/App.jsx";
import registerServiceWorker from './registerServiceWorker';
import axios from "axios"
import { RecaptchaContextProvider } from "./context/RecaptchaContext"
import { SearchContextProvider } from "./context/SearchContext"
import { LoginContextProvider } from "./context/LoginContext"
//import { ForumContextProvider } from "./context/ForumContext"
import { BrowserRouter as Router } from "react-router-dom"
import store from './store';
import { Provider } from 'react-redux'

const requestBoards = axios.get('https://city-walks.herokuapp.com/boards');

axios
  .all([requestBoards])
  .then(
    axios.spread((...responses) => {
      const boardsData = responses[0];
      ReactDOM.render(
        <Router>
          {/* <ForumContextProvider> */}
          <RecaptchaContextProvider>
            <LoginContextProvider>
              <SearchContextProvider>
                {/* replace these context providers with the redux provider */}
                <Provider store={store}>
                  <App boards={boardsData} />
                </Provider>
                {/* replace these context providers with the redux provider */}
              </SearchContextProvider>
            </LoginContextProvider>
          </RecaptchaContextProvider>
          {/* </ForumContextProvider> */}
        </Router>
        , document.getElementById('root'));
    })
  )
  .catch(errors => {
    console.error(errors);
  });

registerServiceWorker();