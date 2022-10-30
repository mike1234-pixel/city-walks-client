import React, { ReactNode, useEffect, useState } from "react";
import FilteredResults from "./FilteredWalks";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { setSearchValue } from "../../../actions/actions";
import Walk from "../../../types/Walks/Walk";
import RootState from "../../../types/State/Root/State";
import WalkCard from "./WalkCard";
import * as Actions from "../../../types/Actions";
import "./Walks.scss";

interface Props {
  searchValue: string;
  setSearchValue: (inputValue: string) => Actions.HandleChangeSearch;
  walks: Array<Walk>;
}

const Walks: React.FC<Props> = (props: Props) => {
  const { searchValue, setSearchValue, walks } = props;

  const [pageNumber, setPageNumber] = useState<number>(0);

  const walksPerPage: number = 3;
  const pagesVisited: number = pageNumber * walksPerPage;

  const pageCount: number = Math.ceil(walks.length / walksPerPage);

  const displayAllWalks: () => Array<ReactNode> = () => {
    return walks
      .slice(pagesVisited, pagesVisited + walksPerPage)
      .map((walk) => {
        const { _id, walk: walkName, city, description, coverImg } = walk;

        return (
          <WalkCard
            id={_id}
            name={walkName}
            city={city}
            description={description}
            imgSrc={coverImg}
          />
        );
      });
  };

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
        displayAllWalks={displayAllWalks}
        pageCount={pageCount}
        changePage={changePage}
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
