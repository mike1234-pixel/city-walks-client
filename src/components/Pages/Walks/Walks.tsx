import { useEffect, useState } from "react";
import FilteredResults from "./FilteredWalks";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { setSearchValue } from "../../../actions/actions";
import Walk from "../../../types/Walks/Walk";
import RootState from "../../../types/State/Root/State";
import * as Actions from "../../../types/Actions";
import "./Walks.css";

interface WalksProps {
  searchValue: string;
  setSearchValue: (inputValue: string) => Actions.HandleChangeSearch;
  walks: Array<Walk>;
}

const Walks = (props: WalksProps) => {
  const { searchValue, setSearchValue, walks } = props;

  const [pageNumber, setPageNumber] = useState<number>(0);

  const walksPerPage: number = 3;
  const pagesVisited: number = pageNumber * walksPerPage;

  const pageCount: number = Math.ceil(walks.length / walksPerPage);

  const changePage = (selected: number) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <FilteredResults
        searchValue={searchValue}
        walks={walks}
        pageCount={pageCount}
        changePage={changePage}
        pagesVisited={pagesVisited}
        walksPerPage={walksPerPage}
      />
    </div>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  walks: state.walksState.walks,
  searchValue: state.searchState.searchValue,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setSearchValue }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Walks);
