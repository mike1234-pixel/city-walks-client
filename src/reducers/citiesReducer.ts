import { AnyAction } from "redux";

interface CitiesState {
    cities: Array<Object>
}

const INITIAL_STATE: CitiesState = {
    cities: [],
};

const citiesReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'SAVE_CITIES':
            return { ...state, cities: action.cities };
        default: return state;
    }
}

export default citiesReducer;