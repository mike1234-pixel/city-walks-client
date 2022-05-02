import BoardsState from '../types/Boards/BoardsState'
import Board from '../types/Boards/Board'

interface Action {
    type: string;
    boards: Array<Board>;
}

const INITIAL_STATE: BoardsState = {
    boards: [],
};

const boardsReducer = (state: BoardsState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_BOARDS':
            return { ...state, boards: action.boards };
        default: return state;
    }
}

export default boardsReducer;