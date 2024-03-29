import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { MDBContainer } from "mdbreact";
import { connect } from "react-redux";
import Sight from "../../../types/Sights/Sight";
import RootState from "../../../types/State/Root/State";

import "./Sights.css";
import SightCard from "./SightCard";

interface SightsProps {
  sights: Array<Sight>;
}

const Sights = (props: SightsProps) => {

  const { sights } = props;

  const [pageNumber, setPageNumber] = useState<number>(0);

  const sightsPerPage = 3;
  const pagesVisited = pageNumber * sightsPerPage;

  const pageCount = Math.ceil(sights.length / sightsPerPage);

  const changePage = ({ selected }: { selected: number; }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MDBContainer>
      <div className='page'>
        <div className='page-heading-container'>
          <h1 className='page-heading'>Sights</h1>
          <h2 className='page-subheading'>
            find more sights and visitor attractions to explore
          </h2>
        </div>
        <div className='card-container'>
          {sights
            .slice(pagesVisited, pagesVisited + sightsPerPage)
            .map((sight: Sight) => {
              const { _id, img, title, content } = sight;

              return (
                <div key={_id}>
                  <SightCard
                    id={_id}
                    name={title}
                    description={content}
                    imgSrc={img}
                  />
                </div>
              );
            })
            .reverse()}
        </div>
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
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  sights: state.sightsState.sights,
});

export default connect(mapStateToProps, null)(Sights);
