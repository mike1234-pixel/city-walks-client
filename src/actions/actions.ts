import { Dispatch } from "redux";
import axios, { AxiosError, AxiosResponse } from "axios";
import * as actions from "../constants/constants";
import * as Actions from "../types/Actions";
import * as Response from "../types/Response";

// data

export const saveSights: () => (
  dispatch: Dispatch<Actions.SaveSights>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/blog")
      .then((res: Response.SightsResponse) => {
        let sights = res.data;
        dispatch({ type: actions.SAVE_SIGHTS, payload: sights });
      })
      .catch((err: Response.SightsError) => {
        console.error(err);
      });
  };
};

export const saveWalks: () => (
  dispatch: Dispatch<Actions.SaveWalks>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/walks")
      .then((res: Response.WalksResponse) => {
        let walks = res.data;
        dispatch({ type: actions.SAVE_WALKS, payload: walks });
      })
      .catch((err: Response.WalksError) => {
        console.error(err);
      });
  };
};

export const saveCities: () => (
  dispatch: Dispatch<Actions.SaveCities>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/cities")
      .then((res: Response.CitiesResponse) => {
        let cities = res.data;
        dispatch({ type: actions.SAVE_CITIES, payload: cities });
      })
      .catch((err: Response.CitiesError) => {
        console.error(err);
      });
  };
};

export const saveBoards: () => (
  dispatch: Dispatch<Actions.SaveBoards>
) => Promise<any> = () => {
  return (dispatch) => {
    return axios
      .get("https://city-walks.herokuapp.com/boards")
      .then((res: Response.BoardsResponse) => {
        let boards = res.data;
        dispatch({ type: actions.SAVE_BOARDS, payload: boards });
      })
      .catch((err: Response.BoardsError) => {
        console.error(err);
      });
  };
};

// registration

export const setFirstName: (payload: string) => Actions.SetFirstName = (
  payload
) => {
  return { type: actions.SET_FIRST_NAME, payload };
};

export const setLastName: (payload: string) => Actions.SetLastName = (
  payload
) => {
  return { type: actions.SET_LAST_NAME, payload };
};

export const setRegistrationEmail: (
  payload: string
) => Actions.SetRegistrationEmail = (payload) => {
  return { type: actions.SET_REGISTRATION_EMAIL, payload };
};

export const setRegistrationPassword: (
  payload: string
) => Actions.SetRegistrationPassword = (payload) => {
  return { type: actions.SET_REGISTRATION_PASSWORD, payload };
};

export const setActivationMessageEmphasis: (
  payload: string
) => Actions.SetActivationMessageEmphasis = (payload) => {
  return { type: actions.SET_ACTIVATION_MESSAGE_EMPHASIS, payload };
};

// login

export const setPrivacyPopupVisible: (
  payload: boolean
) => Actions.SetPopupVisible = (payload) => {
  return { type: actions.SET_POPUP_VISIBLE, payload };
};

export const setLoggedIn: (payload: boolean) => Actions.SetLoggedIn = (
  payload
) => {
  return { type: actions.SET_LOGGED_IN, payload };
};

export const setUserId: (payload: string | null) => Actions.SetUserId = (
  payload
) => {
  return { type: actions.SET_USER_ID, payload };
};

export const setUserFirstName: (
  payload: string | null
) => Actions.SetUserFirstName = (payload) => {
  return { type: actions.SET_USER_FIRST_NAME, payload };
};

export const setUserLastName: (
  payload: string | null
) => Actions.SetUserLastName = (payload) => {
  return { type: actions.SET_USER_LAST_NAME, payload };
};

export const setLoginEmail: (payload: string) => Actions.SetLoginEmail = (
  payload
) => {
  return { type: actions.SET_LOGIN_EMAIL, payload };
};

export const setLoginPassword: (payload: string) => Actions.SetLoginPassword = (
  payload
) => {
  return { type: actions.SET_LOGIN_PASSWORD, payload };
};

export const setForgotPasswordEmail: (
  payload: string
) => Actions.SetForgotPasswordEmail = (payload) => {
  return { type: actions.SET_FORGOT_PASSWORD_EMAIL, payload };
};

// reset login credentials

export const setResetPasswordEmail: (
  payload: string
) => Actions.SetResetPasswordEmail = (payload) => {
  return { type: actions.SET_RESET_PASSWORD_EMAIL, payload };
};

export const setResetPasswordOldPassword: (
  payload: string
) => Actions.SetResetPasswordOldPassword = (payload) => {
  return { type: actions.SET_RESET_PASSWORD_OLD_PASSWORD, payload };
};

export const setResetPasswordNewPassword: (
  payload: string
) => Actions.SetResetPasswordNewPassword = (payload) => {
  return { type: actions.SET_RESET_PASSWORD_NEW_PASSWORD, payload };
};

export const setResetPasswordConfirmNewPassword: (
  payload: string
) => Actions.SetResetPasswordConfirmNewPassword = (payload) => {
  return { type: actions.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD, payload };
};

// verification

export const setVerificationEmail: (
  payload: string
) => Actions.SetVerificationEmail = (payload) => {
  return { type: actions.SET_VERIFICATION_EMAIL, payload };
};

// search

export const handleChangeSearch: (
  payload: string
) => Actions.HandleChangeSearch = (payload) => {
  return { type: actions.HANDLE_CHANGE_SEARCH, payload };
};

export const handleClickSearch: (
  payload: string
) => Actions.HandleClickSearch = (payload) => {
  return { type: actions.HANDLE_CLICK_SEARCH, payload };
};

export const setSearchValue: (payload: string) => Actions.SetSearchValue = (
  payload
) => {
  return { type: actions.HANDLE_CHANGE_SEARCH, payload };
};

export const setRedirect: (payload: boolean) => Actions.SetRedirect = (
  payload
) => {
  return { type: actions.SET_REDIRECT, payload };
};
