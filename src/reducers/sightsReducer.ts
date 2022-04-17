import { AnyAction } from "redux";

interface SightsState {
  sights: Array<Object>
}

const INITIAL_STATE: SightsState = {
  sights: [],
};

const sightsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_SIGHTS':
      return { ...state, sights: action.sights };
    default: return state;
  }
}

export default sightsReducer;