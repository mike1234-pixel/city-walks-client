import City from '../types/Cities/City'
import State from '../types/State/Cities/State'

const initialState: State = {
    cities: [],
};

export interface SaveCitiesAction {
    type: 'SAVE_CITIES',
    payload: Array<City>,
}

const citiesReducer: (state: State, action: SaveCitiesAction) => State = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_CITIES':
            return { ...state, cities: action.payload };
        default: return state;
    }
}

export default citiesReducer;