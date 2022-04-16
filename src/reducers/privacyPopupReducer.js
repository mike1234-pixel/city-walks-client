const INITIAL_STATE = {
    privacyPopupVisible: false,
};

const privacyPopupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_POPUP_VISIBLE':
            return { ...state, privacyPopupVisible: action.boolValue };
        default: return state;
    }
}

export default privacyPopupReducer;