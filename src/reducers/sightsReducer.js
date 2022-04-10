const INITIAL_STATE = {
    sights: [],
  };
  
const sightsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_SIGHTS':
      return { ...state, sights: action.sights };
    default: return state;
  }
}

export default sightsReducer;