import BoardsState from '../Boards/State'
import CitiesState from '../Cities/State'
import LoginState from '../Login/State'
import PrivacyPopupState from '../PrivacyPopup/State'
import RecaptchaState from '../Recaptcha/State'
import SearchState from '../Search/State'
import SightsState from '../Sights/State'
import WalksState from '../Walks/State'

export default interface RootState {
    boardsState: BoardsState;
    citiesState: CitiesState;
    loginState: LoginState;
    privacyPopupState: PrivacyPopupState;
    recaptchaState: RecaptchaState;
    searchState: SearchState;
    sightsState: SightsState;
    walksState: WalksState;
}