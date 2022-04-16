import Router from './Router/Router'
import { useContext, useEffect } from "react"
import { LoginContext } from "../context/LoginContext"
import axios from "axios"
import { connect } from 'react-redux'
import './App.scss'


const App = (props) => {

  const { saveBoards, saveSights, saveWalks, saveCities, setPrivacyPopupVisible, sitekey } = props

  const { setLoggedIn, setUserId, setUserFirstName } = useContext(LoginContext)

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

// this works...
const mapDispatchToProps = (dispatch) => {
  return {
    // don't necessarily need the loading states can just use sights.length instead
    saveSights: (sights) => dispatch({ type: 'SAVE_SIGHTS', sights }),
    saveWalks: (walks) => dispatch({ type: 'SAVE_WALKS', walks }),
    saveCities: (cities) => dispatch({ type: 'SAVE_CITIES', cities }),
    saveBoards: (boards) => dispatch({ type: 'SAVE_BOARDS', boards }),
    setPrivacyPopupVisible: (boolValue) => dispatch({ type: 'SET_POPUP_VISIBLE', boolValue }),
  }
}

const mapStateToProps = state => ({
  sitekey: state.recaptchaState.sitekey,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);