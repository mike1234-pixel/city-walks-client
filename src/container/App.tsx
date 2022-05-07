import Router from './Router/Router'
import React, { useEffect } from "react"
import axios, { AxiosError, AxiosResponse } from "axios"
import { connect } from 'react-redux'
import Walk from '../types/Walks/Walk'
import City from '../types/Cities/City'
import Board from '../types/Boards/Board'
import Sight from '../types/Sights/Sight'
import GlobalState from '../types/State/Global/State'
import './App.scss'

interface Props {
  saveBoards: Function;
  saveSights: Function;
  saveWalks: Function;
  saveCities: Function;
  setPrivacyPopupVisible: Function;
  setLoggedIn: Function;
  setUserId: Function;
  setUserFirstName: Function;
  sitekey: string;
}

const App: React.FC<Props> = (props: Props) => {

  const { saveBoards, saveSights, saveWalks, saveCities, setPrivacyPopupVisible, setLoggedIn, setUserId, setUserFirstName, sitekey } = props

  useEffect(() => {
    const walksRequest: Promise<any> = axios.get('https://city-walks.herokuapp.com/walks');
    const citiesRequest: Promise<any> = axios.get('https://city-walks.herokuapp.com/cities');
    const boardsRequest: Promise<any> = axios.get('https://city-walks.herokuapp.com/boards');
    const sightsRequest: Promise<any> = axios.get('https://city-walks.herokuapp.com/blog');

    // REQUEST DATA AND SAVE TO REDUX STORE
    axios.all([walksRequest, citiesRequest, boardsRequest, sightsRequest])
      .then(
        axios.spread((...responses: Array<AxiosResponse>) => {
          const walks: Array<Walk> = responses[0].data;
          const cities: Array<City> = responses[1].data;
          const boards: Array<Board> = responses[2].data;
          const sights: Array<Sight> = responses[3].data;

          saveSights(sights) // save data to redux store
          saveWalks(walks)
          saveCities(cities)
          saveBoards(boards)
        }
        )
      ).catch((error: AxiosError) => console.log(error.message))

    if (localStorage.getItem("popupVisible") === null) {
      setPrivacyPopupVisible(true)
    }

    if (localStorage.getItem("loggedIn") !== null) {
      setLoggedIn(true)
      setUserId(localStorage.getItem("userId"))
      setUserFirstName(localStorage.getItem("userFirstName"))
    }

    // RECAPTCHA

    const loadScriptByURL: (id: string, url: string, callback: Function) => void = (id, url, callback) => {
      const doesScriptExist = document.getElementById(id);

      if (!doesScriptExist) {
        const script = document.createElement("script");
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

const mapStateToProps = (state: GlobalState) => ({
  sitekey: state.recaptchaState.sitekey,
});

// this works...
const mapDispatchToProps = (dispatch: Function) => {
  return {
    // don't necessarily need the loading states can just use sights.length instead
    saveSights: (sights: Array<Sight>) => dispatch({ type: 'SAVE_SIGHTS', sights }),
    saveWalks: (walks: Array<Walk>) => dispatch({ type: 'SAVE_WALKS', walks }),
    saveCities: (cities: Array<City>) => dispatch({ type: 'SAVE_CITIES', cities }),
    saveBoards: (boards: Array<Board>) => dispatch({ type: 'SAVE_BOARDS', boards }),
    setPrivacyPopupVisible: (boolValue: boolean) => dispatch({ type: 'SET_POPUP_VISIBLE', boolValue }),
    setLoggedIn: (boolValue: boolean) => dispatch({ type: 'SET_LOGGED_IN', boolValue }),
    setUserId: (userId: string) => dispatch({ type: 'SET_USER_ID', userId }),
    setUserFirstName: (userFirstName: string) => dispatch({ type: 'SET_USER_FIRST_NAME', userFirstName }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);