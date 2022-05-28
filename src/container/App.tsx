import Router from './Router/Router'
import React, { useEffect } from "react"
import { connect } from 'react-redux'
import Walk from '../types/Walks/Walk'
import City from '../types/Cities/City'
import Board from '../types/Boards/Board'
import Sight from '../types/Sights/Sight'
import RootState from '../types/State/Root/State'
import { Action, Dispatch, bindActionCreators } from 'redux'
import { saveBoards, saveCities, saveSights, saveWalks, setLoggedIn, setPrivacyPopupVisible, setUserFirstName, setUserId } from '../actions/actions'
import './App.scss'

interface Props {
  sitekey: string;
  saveBoards: (boards?: Array<Board>) => Action;
  saveSights: (sights?: Array<Sight>) => Action;
  saveWalks: (walks?: Array<Walk>) => Action;
  saveCities: (cities?: Array<City>) => Action;
  setPrivacyPopupVisible: (popupVisible: boolean) => Action;
  setLoggedIn: (isLoggedIn: boolean) => Action;
  setUserId: (userId: string | null) => Action;
  setUserFirstName: (userFirstName: string | null) => Action;
  privacyPopupVisible: boolean;
}

const App: React.FC<any> = (props: Props) => {

  const { saveBoards, saveSights, saveWalks, saveCities, setPrivacyPopupVisible, setLoggedIn, setUserId, setUserFirstName, sitekey, privacyPopupVisible } = props

  useEffect(() => {

    // save data to redux store
    saveWalks()
    saveSights()
    saveCities()
    saveBoards()

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

  return (<Router privacyPopupVisible={privacyPopupVisible} loggedIn={false} userId={''} redirect={false} />)
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  sitekey: state.recaptchaState.sitekey,
  privacyPopupVisible: state.privacyPopupState.privacyPopupVisible
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ saveSights, saveWalks, saveCities, saveBoards, setPrivacyPopupVisible, setLoggedIn, setUserId, setUserFirstName }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



