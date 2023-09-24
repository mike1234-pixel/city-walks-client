import Router from "./Router/Router";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Walk from "../types/Walks/Walk";
import City from "../types/Cities/City";
import Board from "../types/Boards/Board";
import Sight from "../types/Sights/Sight";
import RootState from "../types/State/Root/State";
import { Dispatch, bindActionCreators } from "redux";
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
import * as Actions from "../types/Actions";
import "./App.css";

interface Props {
  sitekey: string;
  saveBoards: (boards?: Array<Board>) => Actions.SaveBoards;
  saveSights: (sights?: Array<Sight>) => Actions.SaveSights;
  saveWalks: (walks?: Array<Walk>) => Actions.SaveWalks;
  saveCities: (cities?: Array<City>) => Actions.SaveCities;
  setPrivacyPopupVisible: (popupVisible: boolean) => Actions.SetPopupVisible;
  setLoggedIn: (loggedIn: boolean) => Actions.SetLoggedIn;
  setUserId: (userId: string | null) => Actions.SetUserId;
  setUserFirstName: (userFirstName: string | null) => Actions.SetUserFirstName;
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
