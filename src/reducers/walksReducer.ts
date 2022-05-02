import WalksState from '../types/Walks/WalksState'
import Walk from '../types/Walks/Walk'

interface Action {
  type: string;
  walks: Array<Walk>
}

const INITIAL_STATE: WalksState = {
  walks: [],
};

const walksReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SAVE_WALKS':
      return { ...state, walks: action.walks };
    default: return state;
  }
}

export default walksReducer;