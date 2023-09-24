import React from "react";
import { MDBInput } from "mdbreact";
import { FaSearchLocation } from "react-icons/fa";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import RootState from "../../../types/State/Root/State";
import { handleChangeSearch, setRedirect } from "../../../actions/actions";
import * as Actions from "../../../types/Actions";
import "./SeachBar.css";

interface SearchBarProps {
  handleChangeSearch: (inputValue: string) => Actions.HandleChangeSearch;
  setRedirect: (redirect: boolean) => Actions.SetRedirect;
  searchValue: string;
}

let SearchBar = (props: SearchBarProps) => {

  const { handleChangeSearch, setRedirect, searchValue } = props;

  function handleSubmitSearch(e: React.FormEvent) {
    e.preventDefault();
    setRedirect(true);
  }

  function handleProcessInputValue(e: React.ChangeEvent<any>) {
    const inputValue: string = e.target.value;
    handleChangeSearch(inputValue);
  }

  return (
    <form onSubmit={handleSubmitSearch} className='search-container'>
      <span>
        <MDBInput
          data-testid='search-input'
          label='Search Walks'
          name='search-input'
          id='search-input'
          type='text'
          placeholder='Search'
          className='search-input'
          value={searchValue}
          onChange={handleProcessInputValue}
        />
        <button type='submit' data-testid='search-btn' className='search-btn'>
          <FaSearchLocation
            id='search-btn-icon'
            className='search-location-icon'
          />
        </button>
      </span>
    </form>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  searchValue: state.searchState.searchValue,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ handleChangeSearch, setRedirect }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
