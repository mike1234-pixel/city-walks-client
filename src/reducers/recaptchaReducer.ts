import State from '../types/State/Recaptcha/State'

const initialState: State = {
    sitekey: '6LdmxiUaAAAAAIYySt3c8XvwOMokTQ_SW2cYkvMw',
}

interface RecaptchaSiteKeyAction {
    type: 'SAVE_SITEKEY',
    payload: string,
}

const recaptchaReducer: (state: State, action: RecaptchaSiteKeyAction) => State = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_SITEKEY':
            return { ...state, sitekey: action.payload };
        default: return state;
    }
}

export default recaptchaReducer;