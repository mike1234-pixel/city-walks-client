// import React, { useEffect } from "react"
// import Router from './Router/Router'
// import axios from "axios"
// import { connect } from 'react-redux'
// import './App.scss'

// // what does save boards return?

// interface Props {
//   saveBoards: (boards: {}) => {};
//   saveSights: (sights: {}) => {};
//   saveWalks: (walks: {}) => {};
//   saveCities: (cities: {}) => {};
//   setPrivacyPopupVisible: (boolValue: boolean) => {};
//   setLoggedIn: (boolValue: boolean) => {};
//   setUserId: (userId: string | null) => {};
//   setUserFirstName: (userFirstName: string | null) => {};
//   sitekey: string;
// }

// const App: React.FC<Props> = (props) => {

//   const { saveBoards, saveSights, saveWalks, saveCities, setPrivacyPopupVisible, setLoggedIn, setUserId, setUserFirstName, sitekey } = props

//   useEffect(() => {
//     const walksRequest = axios.get('https://city-walks.herokuapp.com/walks');
//     const citiesRequest = axios.get('https://city-walks.herokuapp.com/cities');
//     const boardsRequest = axios.get('https://city-walks.herokuapp.com/boards');
//     const sightsRequest = axios.get('https://city-walks.herokuapp.com/blog');

//     // REQUEST DATA AND SAVE TO REDUX STORE
//     axios.all([walksRequest, citiesRequest, boardsRequest, sightsRequest])
//       .then(
//         axios.spread((...responses) => {
//           const walks = responses[0].data;
//           const cities = responses[1].data;
//           const boards = responses[2].data;
//           const sights = responses[3].data;

//           saveSights(sights) // save data to redux store
//           saveWalks(walks)
//           saveCities(cities)
//           saveBoards(boards)
//         }
//         )
//       ).catch(error => console.log(error.message))

//     if (localStorage.getItem("popupVisible") === null) {
//       setPrivacyPopupVisible(true)
//     }

//     if (localStorage.getItem("loggedIn") !== null) {
//       setLoggedIn(true)
//       setUserId(localStorage.getItem("userId"))
//       setUserFirstName(localStorage.getItem("userFirstName"))
//     }

//     // RECAPTCHA

//     const loadScriptByURL = (id: string, url: string, callback: any) => {
//       const doesScriptExist = document.getElementById(id);

//       if (!doesScriptExist) {
//         var script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = url;
//         script.id = id;
//         script.onload = function () {
//           if (callback) callback();
//         };
//         document.body.appendChild(script);
//       }
//       console.log(callback)

//       if (doesScriptExist && callback) callback();
//     }

//     // load the script by passing the URL
//     loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${sitekey}`, () => {
//       console.log("recaptcha script loaded!");
//     });

//   }, [])

//   return (<Router />)
// }

// const mapStateToProps = (state: {}) => ({
//   sitekey: state.recaptchaState.sitekey,
// });

// // this works...
// const mapDispatchToProps = (dispatch: ({ }) => {}) => {
//   return {
//     // don't necessarily need the loading states can just use sights.length instead
//     saveSights: (sights: {}) => dispatch({ type: 'SAVE_SIGHTS', sights }),
//     saveWalks: (walks: {}) => dispatch({ type: 'SAVE_WALKS', walks }),
//     saveCities: (cities: {}) => dispatch({ type: 'SAVE_CITIES', cities }),
//     saveBoards: (boards: {}) => dispatch({ type: 'SAVE_BOARDS', boards }),
//     setPrivacyPopupVisible: (boolValue: boolean) => dispatch({ type: 'SET_POPUP_VISIBLE', boolValue }),
//     setLoggedIn: (boolValue: boolean) => dispatch({ type: 'SET_LOGGED_IN', boolValue }),
//     setUserId: (userId: string | null) => dispatch({ type: 'SET_USER_ID', userId }),
//     setUserFirstName: (userFirstName: string | null) => dispatch({ type: 'SET_USER_FIRST_NAME', userFirstName }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import Router from './Router/Router'
import { useEffect } from "react"
import axios from "axios"
import { connect } from 'react-redux'
import './App.scss'


const App = (props) => {

  const { saveBoards, saveSights, saveWalks, saveCities, setPrivacyPopupVisible, setLoggedIn, setUserId, setUserFirstName, sitekey } = props

  useEffect(() => {
    const walksRequest = axios.get('https://city-walks.herokuapp.com/walks');
    const citiesRequest = axios.get('https://city-walks.herokuapp.com/cities');
    const boardsRequest = axios.get('https://city-walks.herokuapp.com/boards');
    const sightsRequest = axios.get('https://city-walks.herokuapp.com/blog');

    // REQUEST DATA AND SAVE TO REDUX STORE
    axios.all([walksRequest, citiesRequest, boardsRequest, sightsRequest])
      .then(
        axios.spread((...responses) => {
          const walks = responses[0].data;
          const cities = responses[1].data;
          const boards = responses[2].data;
          const sights = responses[3].data;

          saveSights(sights) // save data to redux store
          saveWalks(walks)
          saveCities(cities)
          saveBoards(boards)
        }
        )
      ).catch(error => console.log(error.message))

    if (localStorage.getItem("popupVisible") === null) {
      setPrivacyPopupVisible(true)
    }

    if (localStorage.getItem("loggedIn") !== null) {
      setLoggedIn(true)
      setUserId(localStorage.getItem("userId"))
      setUserFirstName(localStorage.getItem("userFirstName"))
    }

    // RECAPTCHA

    const loadScriptByURL = (id, url, callback) => {
      const doesScriptExist = document.getElementById(id);

      if (!doesScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }

      if (doesScriptExist && callback) callback();
    }

    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${sitekey}`, () => {
      console.log("recaptcha script loaded!");
    });

  }, [])

  return (<Router />)
}

const mapStateToProps = state => ({
  sitekey: state.recaptchaState.sitekey,
});

// this works...
const mapDispatchToProps = (dispatch) => {
  return {
    // don't necessarily need the loading states can just use sights.length instead
    saveSights: (sights) => dispatch({ type: 'SAVE_SIGHTS', sights }),
    saveWalks: (walks) => dispatch({ type: 'SAVE_WALKS', walks }),
    saveCities: (cities) => dispatch({ type: 'SAVE_CITIES', cities }),
    saveBoards: (boards) => dispatch({ type: 'SAVE_BOARDS', boards }),
    setPrivacyPopupVisible: (boolValue) => dispatch({ type: 'SET_POPUP_VISIBLE', boolValue }),
    setLoggedIn: (boolValue) => dispatch({ type: 'SET_LOGGED_IN', boolValue }),
    setUserId: (userId) => dispatch({ type: 'SET_USER_ID', userId }),
    setUserFirstName: (userFirstName) => dispatch({ type: 'SET_USER_FIRST_NAME', userFirstName }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);