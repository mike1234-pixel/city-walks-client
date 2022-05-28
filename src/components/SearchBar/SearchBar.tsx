import React from 'react'
import { MDBInput } from "mdbreact"
import { FaSearchLocation } from "react-icons/fa"
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'
import RootState from "../../types/State/Root/State"
import { handleChangeSearch, setRedirect } from '../../actions/actions'
import './SeachBar.scss'

interface Props {
  handleChangeSearch: (inputValue: string) => Action;
  setRedirect: (redirectIsSet: boolean) => Action;
  searchValue: string;
}

let SearchBar: React.FC<Props> = (props: Props) => {

  const { handleChangeSearch, setRedirect, searchValue } = props;

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    setRedirect(true)
  }

  function processInputValue(e: React.ChangeEvent<any>) {
    const inputValue: string = e.target.value
    handleChangeSearch(inputValue)
  }

  return (
    <form onSubmit={submitSearch} className="search-container">
      <span>
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

const mapStateToProps: (state: RootState) => void = (state) => ({
  searchValue: state.searchState.searchValue,
});


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ handleChangeSearch, setRedirect }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);