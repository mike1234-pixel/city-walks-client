import Router from "./Router/Router";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Walk from "../types/Walks/Walk";
import City from "../types/Cities/City";
import Board from "../types/Boards/Board";
import Sight from "../types/Sights/Sight";
import RootState from "../types/State/Root/State";
import { Action, Dispatch, bindActionCreators } from "redux";
import {
  saveBoards,
  saveCities,
  saveSights,
  saveWalks,
  setLoggedIn,
  setPrivacyPopupVisible,
  setUserFirstName,
  setUserId,
} from "../actions/actions";
import * as actions from "../constants/constants";
import "./App.scss";
import { PayloadAction } from "@reduxjs/toolkit";

interface Props {
  sitekey: string;
  saveBoards: (
    boards?: Array<Board>
  ) => PayloadAction<Array<Board>, typeof actions.SAVE_BOARDS>;
  saveSights: (
    sights?: Array<Sight>
  ) => PayloadAction<Array<Sight>, typeof actions.SAVE_SIGHTS>;
  saveWalks: (
    walks?: Array<Walk>
  ) => PayloadAction<Array<Walk>, typeof actions.SAVE_WALKS>;
  saveCities: (
    cities?: Array<City>
  ) => PayloadAction<Array<City>, typeof actions.SAVE_CITIES>;
  setPrivacyPopupVisible: (
    popupVisible: boolean
  ) => PayloadAction<boolean, typeof actions.SET_POPUP_VISIBLE>;
  setLoggedIn: (
    loggedIn: boolean
  ) => PayloadAction<boolean, typeof actions.SET_LOGGED_IN>;
  setUserId: (
    userId: string | null
  ) => PayloadAction<string | null, typeof actions.SET_USER_ID>;
  setUserFirstName: (
    userFirstName: string | null
  ) => PayloadAction<string | null, typeof actions.SET_USER_FIRST_NAME>;
  privacyPopupVisible: boolean;
}

const App: React.FC<any> = (props: Props) => {
  const {
    saveBoards,
    saveSights,
    saveWalks,
    saveCities,
    setPrivacyPopupVisible,
    setLoggedIn,
    setUserId,
    setUserFirstName,
    sitekey,
    privacyPopupVisible,
  } = props;

  useEffect(() => {
    // save data to redux store
    saveWalks();
    saveSights();
    saveCities();
    saveBoards();

    if (localStorage.getItem("popupVisible") === null) {
      setPrivacyPopupVisible(true);
    }

    if (localStorage.getItem("loggedIn") !== null) {
      setLoggedIn(true);

      setUserId(localStorage.getItem("userId"));
      setUserFirstName(localStorage.getItem("userFirstName"));
    }

    // RECAPTCHA

    const loadScriptByURL: (
      id: string,
      url: string,
      callback: Function
    ) => void = (id, url, callback) => {
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
    };

    // load the script by passing the URL
    loadScriptByURL(
      "recaptcha-key",
      `https://www.google.com/recaptcha/api.js?render=${sitekey}`,
      () => {
        console.log("recaptcha script loaded!");
      }
    );
  }, []);

  return (
    <Router
      privacyPopupVisible={privacyPopupVisible}
      loggedIn={false}
      userId={""}
      redirect={false}
    />
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  sitekey: state.recaptchaState.sitekey,
  privacyPopupVisible: state.privacyPopupState.privacyPopupVisible,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        saveSights,
        saveWalks,
        saveCities,
        saveBoards,
        setPrivacyPopupVisible,
        setLoggedIn,
        setUserId,
        setUserFirstName,
      },
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
