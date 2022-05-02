import SightsState from '../types/Sights/SightsState'
import Sight from '../types/Sights/Sight'

interface Action {
  type: string;
  sights: Array<Sight>;
}

const INITIAL_STATE: SightsState = {
  sights: [],
};

const sightsReducer = (state: SightsState = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SAVE_SIGHTS':
      return { ...state, sights: action.sights };
    default: return state;
  }
}

export default sightsReducer;