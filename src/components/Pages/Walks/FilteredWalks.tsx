import React, { ReactNode } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import ReactPaginate from "react-paginate";
import { FaSearchLocation } from "react-icons/fa";
import { setSearchValue } from "../../../actions/actions";
import Walk from "../../../types/Walks/Walk";
import WalkCard from "./WalkCard";

interface Props {
  searchValue: string;
  walks: Array<Walk>;
  displayAllWalks: () => Array<ReactNode>;
  pageCount: number;
  changePage: (selected: number) => void;
}

const FilteredResults: React.FC<Props> = (props: Props) => {
  const { searchValue, walks, displayAllWalks, pageCount, changePage } = props;

  console.log(searchValue === "");

  if (searchValue === "") {
    return (
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
  }

  return (
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
                  id={_id}
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
};

export default FilteredResults;
