import City from '../types/Cities/City'
import State from '../types/State/Cities/State'

interface Action {
    type: string,
    cities: Array<City>
}

const INITIAL_STATE: State = {
    cities: [],
};

const citiesReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_CITIES':
            return { ...state, cities: action.cities };
        default: return state;
    }
}

export default citiesReducer;