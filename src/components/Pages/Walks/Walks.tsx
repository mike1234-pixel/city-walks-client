import React, { ReactNode, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdbreact";
import { FaSearchLocation } from "react-icons/fa";
import urlify from "../../../functions/urlify";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { GiWalkingBoot } from "react-icons/gi";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
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

  // display all walks pagination

  const [pageNumber, setPageNumber] = useState<number>(0);
  let filteredResults: ReactNode;

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
            key={_id}
            name={walkName}
            city={city}
            description={description}
            imgSrc={coverImg}
          />
        );
      });
  };

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (searchValue === "") {
    filteredResults = (
      <MDBContainer>
        <div className="page">
          <div className="page-heading-container">
            <h1 className="page-heading">Walks</h1>
            <MDBBtn
              outline
              color="elegant"
              className="city-card-btn"
              onClick={() => setSearchValue("")}
            >
              Show all walks
            </MDBBtn>
            <p data-testid="walks-search-icon" className="walks-search-icon">
              <FaSearchLocation className="search-location-icon" />
              {`  ${searchValue}`}
            </p>
          </div>
          <div className="card-container">{displayAllWalks()}</div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination-buttons"}
            previousLinkClassName={"previous-button"}
            nextLinkClassName={"next-button"}
            disabledClassName={"pagination-disabled"}
            activeClassName={"pagination-active"}
          />
        </div>
      </MDBContainer>
    );
  } else if (
    walks.map((walk: Walk) => {
      walk.walk.toLowerCase().includes(searchValue.toLowerCase()) ||
        walk.city.toLowerCase().includes(searchValue.toLowerCase());
    })
  ) {
    filteredResults = (
      <MDBContainer>
        <div className="page">
          <div className="page-heading-container">
            <h1 className="page-heading" data-testid="walks-page-heading">
              Walks
            </h1>
            <MDBBtn
              outline
              color="elegant"
              className="city-card-btn"
              onClick={() => setSearchValue("")}
            >
              Show all walks
            </MDBBtn>
            <p data-testid="walks-search-icon" className="walks-search-icon">
              <FaSearchLocation className="search-location-icon" />
              {`  ${searchValue}`}
            </p>
          </div>
          <div className="card-container">
            {walks.map((walk: Walk) => {
              const { _id, walk: walkName, city, coverImg, description } = walk;

              if (
                walkName.toLowerCase().includes(searchValue.toLowerCase()) ||
                city.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return (
                  <WalkCard
                    key={_id}
                    city={city}
                    name={walkName}
                    description={description}
                    imgSrc={coverImg}
                  />
                );
              }
            })}
          </div>
        </div>
      </MDBContainer>
    );
  }

  return <div>{filteredResults}</div>;
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
