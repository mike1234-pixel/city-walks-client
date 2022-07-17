import Sight from '../types/Sights/Sight'
import State from '../types/State/Sights/State'

const initialState: State = {
  sights: [],
}

export interface SaveSightsAction {
  type: 'SAVE_SIGHTS';
  payload: Array<Sight>;
}

const sightsReducer: (state: State, action: SaveSightsAction) => State = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_SIGHTS':
      return { ...state, sights: action.payload };
    default: return state;
  }
}

export default sightsReducer;