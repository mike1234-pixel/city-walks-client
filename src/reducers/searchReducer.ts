import { AnyAction } from "redux";

interface SearchState {
    redirect: boolean,
    searchValue: string
}

const INITIAL_STATE: SearchState = {
    redirect: false,
    searchValue: '',
};

const searchReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'SET_REDIRECT':
            return { ...state, redirect: action.boolValue };
        case 'HANDLE_CHANGE_SEARCH':
            return { ...state, searchValue: action.inputValue };
        case 'HANDLE_CLICK_SEARCH':
            return { ...state, searchValue: action.cityToSearch };
        default: return state;
    }
}

export default searchReducer;