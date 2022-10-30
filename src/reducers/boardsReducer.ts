import State from "../types/State/Boards/State";
import * as Actions from "../types/Actions";

const initialState: State = {
  boards: [],
};

const boardsReducer: (state: State, action: Actions.SaveBoards) => State = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SAVE_BOARDS":
      return { ...state, boards: action.payload };
    default:
      return state;
  }
};

export default boardsReducer;
