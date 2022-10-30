import State from "../types/State/Recaptcha/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  sitekey: "6LdmxiUaAAAAAIYySt3c8XvwOMokTQ_SW2cYkvMw",
};

const recaptchaReducer: (state: State, action: Actions.SaveSiteKey) => State = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SAVE_SITEKEY":
      return { ...state, sitekey: action.payload };
    default:
      return state;
  }
};

export default recaptchaReducer;
