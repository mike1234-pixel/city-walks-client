import Walk from '../types/Walks/Walk'
import State from '../types/State/Walks/State'

const initialState: State = {
  walks: [],
};

export interface SaveWalksAction {
  type: 'SAVE_WALKS',
  payload: Array<Walk>,
}

const walksReducer: (state: State, action: SaveWalksAction) => State = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_WALKS':
      return { ...state, walks: action.payload };
    default: return state;
  }
}

export default walksReducer;