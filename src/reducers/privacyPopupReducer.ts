import State from '../types/State/PrivacyPopup/State'

const initialState: State = {
    privacyPopupVisible: false,
}

export interface PriacyPopupVisibleAction {
    type: 'SET_POPUP_VISIBLE';
    payload: boolean;
}

const privacyPopupReducer: (state: State, action: PriacyPopupVisibleAction) => State = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POPUP_VISIBLE':
            return { ...state, privacyPopupVisible: action.payload };
        default: return state;
    }
}

export default privacyPopupReducer;