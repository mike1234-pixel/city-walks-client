import Sight from "../types/Sights/Sight";
import Walk from "../types/Walks/Walk";
import City from "../types/Cities/City";
import Board from "../types/Boards/Board";
import { Dispatch } from "redux";
import axios, { AxiosError, AxiosResponse } from "axios";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

// data

export const saveSights: () => (
  dispatch: Dispatch<PayloadAction<Array<Sight>, typeof actions.SAVE_SIGHTS>>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/blog")
      .then((res: AxiosResponse) => {
        let sights: Array<Sight> = res.data;
        dispatch({ type: actions.SAVE_SIGHTS, payload: sights });
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };
};

export const saveWalks: () => (
  dispatch: Dispatch<PayloadAction<Array<Walk>, typeof actions.SAVE_WALKS>>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/walks")
      .then((res: AxiosResponse) => {
        let walks: Array<Walk> = res.data;
        dispatch({ type: actions.SAVE_WALKS, payload: walks });
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };
};

export const saveCities: () => (
  dispatch: Dispatch<PayloadAction<Array<City>, typeof actions.SAVE_CITIES>>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/cities")
      .then((res: AxiosResponse) => {
        let cities: Array<City> = res.data;
        dispatch({ type: actions.SAVE_CITIES, payload: cities });
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };
};

export const saveBoards: () => (
  dispatch: Dispatch<PayloadAction<Array<Board>, typeof actions.SAVE_BOARDS>>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/boards")
      .then((res: AxiosResponse) => {
        let boards: Array<Board> = res.data;
        dispatch({ type: actions.SAVE_BOARDS, payload: boards });
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };
};

// registration

export const setFirstName: (
  payload: string
) => PayloadAction<string, typeof actions.SET_FIRST_NAME> = (payload) => {
  return { type: actions.SET_FIRST_NAME, payload };
};

export const setLastName: (
  payload: string
) => PayloadAction<string, typeof actions.SET_LAST_NAME> = (payload) => {
  return { type: actions.SET_LAST_NAME, payload };
};

export const setRegistrationEmail: (
  payload: string
) => PayloadAction<string, typeof actions.SET_REGISTRATION_EMAIL> = (
  payload
) => {
  return { type: actions.SET_REGISTRATION_EMAIL, payload };
};

export const setRegistrationPassword: (
  payload: string
) => PayloadAction<string, typeof actions.SET_REGISTRATION_PASSWORD> = (
  payload
) => {
  return { type: actions.SET_REGISTRATION_PASSWORD, payload };
};

export const setActivationMessageEmphasis: (
  payload: string
) => PayloadAction<string, typeof actions.SET_ACTIVATION_MESSAGE_EMPHASIS> = (
  payload
) => {
  return { type: actions.SET_ACTIVATION_MESSAGE_EMPHASIS, payload };
};

// login

export const setPrivacyPopupVisible: (
  payload: boolean
) => PayloadAction<boolean, typeof actions.SET_POPUP_VISIBLE> = (payload) => {
  return { type: actions.SET_POPUP_VISIBLE, payload };
};

export const setLoggedIn: (
  payload: boolean
) => PayloadAction<boolean, typeof actions.SET_LOGGED_IN> = (payload) => {
  return { type: actions.SET_LOGGED_IN, payload };
};

export const setUserId: (
  payload: string | null
) => PayloadAction<string | null, typeof actions.SET_USER_ID> = (payload) => {
  return { type: actions.SET_USER_ID, payload };
};

export const setUserFirstName: (
  payload: string | null
) => PayloadAction<string | null, typeof actions.SET_USER_FIRST_NAME> = (
  payload
) => {
  return { type: actions.SET_USER_FIRST_NAME, payload };
};

export const setUserLastName: (
  payload: string | null
) => PayloadAction<string | null, typeof actions.SET_USER_LAST_NAME> = (
  payload
) => {
  return { type: actions.SET_USER_LAST_NAME, payload };
};

export const setLoginEmail: (
  payload: string
) => PayloadAction<string, typeof actions.SET_LOGIN_EMAIL> = (payload) => {
  return { type: actions.SET_LOGIN_EMAIL, payload };
};

export const setLoginPassword: (
  payload: string
) => PayloadAction<string, typeof actions.SET_LOGIN_PASSWORD> = (payload) => {
  return { type: actions.SET_LOGIN_PASSWORD, payload };
};

export const setForgotPasswordEmail: (
  payload: string
) => PayloadAction<string, typeof actions.SET_FORGOT_PASSWORD_EMAIL> = (
  payload
) => {
  return { type: actions.SET_FORGOT_PASSWORD_EMAIL, payload };
};

// reset login credentials

export const setResetPasswordEmail: (
  payload: string
) => PayloadAction<string, typeof actions.SET_RESET_PASSWORD_EMAIL> = (
  payload
) => {
  return { type: actions.SET_RESET_PASSWORD_EMAIL, payload };
};

export const setResetPasswordOldPassword: (
  payload: string
) => PayloadAction<string, typeof actions.SET_RESET_PASSWORD_OLD_PASSWORD> = (
  payload
) => {
  return { type: actions.SET_RESET_PASSWORD_OLD_PASSWORD, payload };
};

export const setResetPasswordNewPassword: (
  payload: string
) => PayloadAction<string, typeof actions.SET_RESET_PASSWORD_NEW_PASSWORD> = (
  payload
) => {
  return { type: actions.SET_RESET_PASSWORD_NEW_PASSWORD, payload };
};

export const setResetPasswordConfirmNewPassword: (
  payload: string
) => PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD
> = (payload) => {
  return { type: actions.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD, payload };
};

// verification

export const setVerificationEmail: (
  payload: string
) => PayloadAction<string, typeof actions.SET_VERIFICATION_EMAIL> = (
  payload
) => {
  return { type: actions.SET_VERIFICATION_EMAIL, payload };
};

// search

export const handleChangeSearch: (
  payload: string
) => PayloadAction<string, typeof actions.HANDLE_CHANGE_SEARCH> = (payload) => {
  return { type: actions.HANDLE_CHANGE_SEARCH, payload };
};

export const handleClickSearch: (
  payload: string
) => PayloadAction<string, typeof actions.HANDLE_CLICK_SEARCH> = (payload) => {
  return { type: actions.HANDLE_CLICK_SEARCH, payload };
};

export const setSearchValue: (
  payload: string
) => PayloadAction<string, typeof actions.HANDLE_CHANGE_SEARCH> = (payload) => {
  return { type: actions.HANDLE_CHANGE_SEARCH, payload };
};

export const setRedirect: (
  payload: boolean
) => PayloadAction<boolean, typeof actions.SET_REDIRECT> = (payload) => {
  return { type: actions.SET_REDIRECT, payload };
};
