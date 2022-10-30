import State from "../types/State/PrivacyPopup/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  privacyPopupVisible: false,
};

const privacyPopupReducer: (
  state: State,
  action: PayloadAction<boolean, typeof actions.SET_POPUP_VISIBLE>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POPUP_VISIBLE":
      return { ...state, privacyPopupVisible: action.payload };
    default:
      return state;
  }
};

export default privacyPopupReducer;
