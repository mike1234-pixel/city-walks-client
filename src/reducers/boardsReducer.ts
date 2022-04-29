import BoardsState from '../types/BoardsState'
import Board from '../types/Board'

interface Action {
    type: string;
    boards: Array<Board>
}

const INITIAL_STATE: BoardsState = {
    boards: [],
};

const boardsReducer = (state: BoardsState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_BOARDS':
            console.log(action.boards)
            return { ...state, boards: action.boards };
        default: return state;
    }
}

export default boardsReducer;