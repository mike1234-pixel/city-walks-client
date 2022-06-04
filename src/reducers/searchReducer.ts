import State from '../types/State/Search/State'

interface Action {
    type: string;
    redirect?: boolean;
    inputValue?: string;
    cityToSearch?: string;
}

const INITIAL_STATE: State = {
    redirect: false,
    searchValue: '',
};

const searchReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SET_REDIRECT':
            return { ...state, redirect: action.redirect };
        case 'HANDLE_CHANGE_SEARCH':
            return { ...state, searchValue: action.inputValue };
        case 'HANDLE_CLICK_SEARCH':
            return { ...state, searchValue: action.cityToSearch };
        default: return state;
    }
}

export default searchReducer;