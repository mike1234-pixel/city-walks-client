import State from '../types/State/Recaptcha/State'

interface Action {
    type: string;
    sitekey: string;
}

const INITIAL_STATE: State = {
    sitekey: '6LdmxiUaAAAAAIYySt3c8XvwOMokTQ_SW2cYkvMw',
};

const recaptchaReducer = (state: State = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'SAVE_SITEKEY':
            return { ...state, sitekey: action.sitekey };
        default: return state;
    }
}

export default recaptchaReducer;