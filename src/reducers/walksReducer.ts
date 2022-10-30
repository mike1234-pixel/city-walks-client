import State from "../types/State/Walks/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  walks: [],
};

const walksReducer: (state: State, action: Actions.SaveWalks) => State = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SAVE_WALKS":
      return { ...state, walks: action.payload };
    default:
      return state;
  }
};

export default walksReducer;
