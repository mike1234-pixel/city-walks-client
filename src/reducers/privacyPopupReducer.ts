import State from "../types/State/PrivacyPopup/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  privacyPopupVisible: false,
};

const privacyPopupReducer: (
  state: State,
  action: Actions.SetPopupVisible
) => State = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POPUP_VISIBLE":
      return { ...state, privacyPopupVisible: action.payload };
    default:
      return state;
  }
};

export default privacyPopupReducer;
