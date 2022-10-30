import State from "../types/State/Sights/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  sights: [],
};

const sightsReducer: (state: State, action: Actions.SaveSights) => State = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SAVE_SIGHTS":
      return { ...state, sights: action.payload };
    default:
      return state;
  }
};

export default sightsReducer;
