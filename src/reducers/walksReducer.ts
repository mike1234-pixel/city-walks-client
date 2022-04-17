import { AnyAction } from "redux";

interface WalksState {
  walks: Array<Object>
}

const INITIAL_STATE: WalksState = {
  walks: [],
};

const walksReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_WALKS':
      return { ...state, walks: action.walks };
    default: return state;
  }
}

export default walksReducer;