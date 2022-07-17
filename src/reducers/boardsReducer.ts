import Board from '../types/Boards/Board'
import State from '../types/State/Boards/State'

const initialState: State = {
    boards: [],
};

export interface SaveBoardsAction {
    type: 'SAVE_BOARDS',
    payload: Array<Board>,
}

const boardsReducer: (state: State, action: SaveBoardsAction) => State = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_BOARDS':
            return { ...state, boards: action.payload };
        default: return state;
    }
}

export default boardsReducer;