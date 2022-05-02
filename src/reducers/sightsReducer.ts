import Sight from '../types/Sights/Sight'
import State from '../types/State/Sights/State'

interface Action {
  type: string;
  sights: Array<Sight>;
}

const INITIAL_STATE: State = {
  sights: [],
};

const sightsReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SAVE_SIGHTS':
      return { ...state, sights: action.sights };
    default: return state;
  }
}

export default sightsReducer;