import State from '../types/State/PrivacyPopup/State'

interface Action {
    type: string;
    popupVisible: boolean;
}

const INITIAL_STATE: State = {
    privacyPopupVisible: false,
};

const privacyPopupReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SET_POPUP_VISIBLE':
            return { ...state, privacyPopupVisible: action.popupVisible };
        default: return state;
    }
}

export default privacyPopupReducer;