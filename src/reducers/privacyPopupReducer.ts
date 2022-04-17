import { AnyAction } from "redux";

interface PrivacyPopupState {
    privacyPopupVisible: boolean,
}

const INITIAL_STATE: PrivacyPopupState = {
    privacyPopupVisible: false,
};

const privacyPopupReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'SET_POPUP_VISIBLE':
            return { ...state, privacyPopupVisible: action.boolValue };
        default: return state;
    }
}

export default privacyPopupReducer;