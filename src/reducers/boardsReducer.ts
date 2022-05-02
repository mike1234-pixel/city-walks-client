import Board from '../types/Boards/Board'
import State from '../types/State/Boards/State'

interface Action {
    type: string;
    boards: Array<Board>;
}

const INITIAL_STATE: State = {
    boards: [],
};

const boardsReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_BOARDS':
            return { ...state, boards: action.boards };
        default: return state;
    }
}

export default boardsReducer;