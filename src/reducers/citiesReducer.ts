import CitiesState from '../types/Cities/CitiesState';
import City from '../types/Cities/City'

interface Action {
    type: string,
    cities: Array<City>
}

const INITIAL_STATE: CitiesState = {
    cities: [],
};

const citiesReducer = (state: CitiesState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_CITIES':
            return { ...state, cities: action.cities };
        default: return state;
    }
}

export default citiesReducer;