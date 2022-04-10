const INITIAL_STATE = {
    boards: [],
};

const boardsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SAVE_BOARDS':
            return { ...state, boards: action.boards };
        default: return state;
    }
}

export default boardsReducer;