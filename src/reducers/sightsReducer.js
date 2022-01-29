const INITIAL_STATE = {
    sights: [],
    sightsLoading: true
  };
  
const sightsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_SIGHTS':
      return { ...state, sights: action.sights };
    case 'TOGGLE_SIGHTS_LOADING':
      return {...state, sightsLoading: !state.sightsLoading}
    default: return state;
  }
}

export default sightsReducer;