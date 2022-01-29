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
import { ForumContextProvider } from "./context/ForumContext"
import { WalksContextProvider } from "./context/WalksContext"
// import { BlogsContextProvider } from "./context/BlogsContext"
import { BrowserRouter as Router } from "react-router-dom"
import store from './store';

import { Provider } from 'react-redux'

const requestOne = axios.get('https://city-walks.herokuapp.com/walks');
const requestTwo = axios.get('https://city-walks.herokuapp.com/cities');
const requestThree = axios.get('https://city-walks.herokuapp.com/boards');
const requestFour = axios.get('https://city-walks.herokuapp.com/blog');

// replace these context providers one by one, start with the simplest... BlogsContext

axios
  .all([requestOne, requestTwo, requestThree, requestFour])
  .then(
    axios.spread((...responses) => {
      const walksData = responses[0];
      const citiesData = responses[1];
      const boardsData = responses[2];
      ReactDOM.render(
      <Router>
        <ForumContextProvider>
          <RecaptchaContextProvider>
            <LoginContextProvider>
              <SearchContextProvider>
                <WalksContextProvider>
                  {/* <BlogsContextProvider> */}
                  <Provider store={store}>
                    <App walks={walksData.data} cities={citiesData.data} boards={boardsData}/>
                  </Provider>
                  {/* </BlogsContextProvider> */}
                </WalksContextProvider>
              </SearchContextProvider>
            </LoginContextProvider>
          </RecaptchaContextProvider>
        </ForumContextProvider>
      </Router>
      , document.getElementById('root'));
    })
  )
  .catch(errors => {
    console.error(errors);
  });

registerServiceWorker();