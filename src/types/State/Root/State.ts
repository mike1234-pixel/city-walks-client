import BoardsState from "../Boards/State"
import CitiesState from "../Cities/State"
import PrivacyPopupState from "../PrivacyPopup/State"
import SearchState from "../Search/State"
import SightsState from "../Sights/State"
import WalksState from "../Walks/State"

export default interface RootState {
  boardsState: BoardsState
  citiesState: CitiesState
  privacyPopupState: PrivacyPopupState
  searchState: SearchState
  sightsState: SightsState
  walksState: WalksState
}
