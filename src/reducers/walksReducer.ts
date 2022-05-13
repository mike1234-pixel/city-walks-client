import Walk from '../types/Walks/Walk'
import State from '../types/State/Walks/State'

interface Action {
  type: string;
  walks: Array<Walk>
}

const INITIAL_STATE: State = {
  walks: [],
};

const walksReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'SAVE_WALKS':
      console.log(action.type, state)
      return { ...state, walks: action.walks };
    default: return state;
  }
}

export default walksReducer;