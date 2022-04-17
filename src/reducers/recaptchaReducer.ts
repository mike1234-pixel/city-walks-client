import { AnyAction } from "redux";

interface RecaptchaState {
    sitekey: string
}

const INITIAL_STATE: RecaptchaState = {
    sitekey: '6LdmxiUaAAAAAIYySt3c8XvwOMokTQ_SW2cYkvMw',
};

const recaptchaReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case 'SAVE_SITEKEY':
            return { ...state, sitekey: action.sitekey };
        default: return state;
    }
}

export default recaptchaReducer;