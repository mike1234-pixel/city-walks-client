import State from "../types/State/Recaptcha/State";
import * as actions from "../constants/constants";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: State = {
  sitekey: "6LdmxiUaAAAAAIYySt3c8XvwOMokTQ_SW2cYkvMw",
};

const recaptchaReducer: (
  state: State,
  action: PayloadAction<string, typeof actions.SAVE_SITEKEY>
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SITEKEY":
      return { ...state, sitekey: action.payload };
    default:
      return state;
  }
};

export default recaptchaReducer;
