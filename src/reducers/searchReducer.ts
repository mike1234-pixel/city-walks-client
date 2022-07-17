import State from '../types/State/Search/State'

const initialState: State = {
    redirect: false,
    searchValue: '',
};

export interface SearchChangeAction {
    type: 'HANDLE_CHANGE_SEARCH',
    payload: string,
}

export interface SearchClickAction {
    type: 'HANDLE_CLICK_SEARCH',
    payload: string,
}

export interface RedirectAction {
    type: 'SET_REDIRECT',
    payload: boolean
}

type SearchAction = SearchChangeAction | SearchClickAction | RedirectAction

const searchReducer: (state: State, action: SearchAction) => State = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REDIRECT':
            return { ...state, redirect: action.payload };
        case 'HANDLE_CHANGE_SEARCH':
            return { ...state, searchValue: action.payload };
        case 'HANDLE_CLICK_SEARCH':
            return { ...state, searchValue: action.payload };
        default: return state;
    }
}

export default searchReducer;