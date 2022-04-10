const INITIAL_STATE = {
    walks: [],
  };
  
const walksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_WALKS':
      return { ...state, walks: action.walks };
    default: return state;
  }
}

export default walksReducer;