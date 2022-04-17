import { AnyAction } from "redux";

interface BoardsState {
    boards: Array<Object>
}

const INITIAL_STATE: BoardsState = {
    boards: [],
};

const boardsReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'SAVE_BOARDS':
            return { ...state, boards: action.boards };
        default: return state;
    }
}

export default boardsReducer;