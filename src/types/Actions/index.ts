import { PayloadAction } from "@reduxjs/toolkit";
import Walk from "../Walks/Walk";
import * as actions from "../../constants/constants";
import City from "../Cities/City";
import Sight from "../Sights/Sight";
import Board from "../Boards/Board";

export type SaveWalks = PayloadAction<Array<Walk>, typeof actions.SAVE_WALKS>;

export type SaveCities = PayloadAction<Array<City>, typeof actions.SAVE_CITIES>;

export type SaveSights = PayloadAction<
  Array<Sight>,
  typeof actions.SAVE_SIGHTS
>;

export type SaveBoards = PayloadAction<
  Array<Board>,
  typeof actions.SAVE_BOARDS
>;

export type SetFirstName = PayloadAction<string, typeof actions.SET_FIRST_NAME>;

export type SetLastName = PayloadAction<string, typeof actions.SET_LAST_NAME>;

export type SetRegistrationEmail = PayloadAction<
  string,
  typeof actions.SET_REGISTRATION_EMAIL
>;

export type SetRegistrationPassword = PayloadAction<
  string,
  typeof actions.SET_REGISTRATION_PASSWORD
>;

export type SetActivationMessageEmphasis = PayloadAction<
  string,
  typeof actions.SET_ACTIVATION_MESSAGE_EMPHASIS
>;

export type SetPopupVisible = PayloadAction<
  boolean,
  typeof actions.SET_POPUP_VISIBLE
>;

export type SetLoggedIn = PayloadAction<boolean, typeof actions.SET_LOGGED_IN>;

export type SetUserId = PayloadAction<
  string | null,
  typeof actions.SET_USER_ID
>;

export type SetUserFirstName = PayloadAction<
  string | null,
  typeof actions.SET_USER_FIRST_NAME
>;

export type SetUserLastName = PayloadAction<
  string | null,
  typeof actions.SET_USER_LAST_NAME
>;

export type SetLoginEmail = PayloadAction<
  string,
  typeof actions.SET_LOGIN_EMAIL
>;

export type SetLoginPassword = PayloadAction<
  string,
  typeof actions.SET_LOGIN_PASSWORD
>;

export type SetForgotPasswordEmail = PayloadAction<
  string,
  typeof actions.SET_FORGOT_PASSWORD_EMAIL
>;

export type SetResetPasswordEmail = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_EMAIL
>;

export type SetResetPasswordOldPassword = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_OLD_PASSWORD
>;

export type SetResetPasswordNewPassword = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_NEW_PASSWORD
>;

export type SetResetPasswordConfirmNewPassword = PayloadAction<
  string,
  typeof actions.SET_RESET_PASSWORD_CONFIRM_NEW_PASSWORD
>;

export type SetVerificationEmail = PayloadAction<
  string,
  typeof actions.SET_VERIFICATION_EMAIL
>;

export type HandleChangeSearch = PayloadAction<
  string,
  typeof actions.HANDLE_CHANGE_SEARCH
>;

export type HandleClickSearch = PayloadAction<
  string,
  typeof actions.HANDLE_CLICK_SEARCH
>;

export type SetSearchValue = PayloadAction<
  string,
  typeof actions.HANDLE_CHANGE_SEARCH
>;

export type SetRedirect = PayloadAction<boolean, typeof actions.SET_REDIRECT>;

export type SaveSiteKey = PayloadAction<string, typeof actions.SAVE_SITEKEY>;
