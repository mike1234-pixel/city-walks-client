import { MDBInput } from "mdbreact"
import { FaSearchLocation } from "react-icons/fa"
import { connect } from 'react-redux'
import './SeachBar.scss'

let SearchBar = (props) => {

  const { handleChangeSearch, setRedirect, searchValue } = props;

  function submitSearch(e) {
    e.preventDefault()
    setRedirect(true)
  }

  function processInputValue(e) {
    const inputValue = e.target.value
    handleChangeSearch(inputValue)
  }

  return (
    <form onSubmit={submitSearch}>
      <span className="search-container">
        <MDBInput
          data-testid="search-input"
          label="Search Walks"
          name="search-input"
          id="search-input"
          type="text" placeholder="Search"
          className="search-input"
          value={searchValue}
          onChange={processInputValue}
        />
        <button type="submit" data-testid="search-btn" className="search-btn"><FaSearchLocation id="search-btn-icon" className="search-location-icon" /></button>
      </span>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeSearch: (inputValue) => dispatch({ type: 'HANDLE_CHANGE_SEARCH', inputValue }),
    setRedirect: (boolValue) => dispatch({ type: 'SET_REDIRECT', boolValue }),
  }
}

const mapStateToProps = state => ({
  searchValue: state.searchState.searchValue,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);