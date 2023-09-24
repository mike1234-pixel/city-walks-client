import { useEffect, useState } from "react";
import { MDBContainer } from "mdbreact";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { handleClickSearch, setRedirect } from "../../../actions/actions";
import City from "../../../types/Cities/City";
import { RootState } from "../../../store";
import CityCard from "./CityCard";
import * as Actions from "../../../types/Actions";
import "./Cities.css";

interface CitiesProps {
  cities: Array<City>;
  handleClickSearch: (cityToSearch: string) => Actions.HandleClickSearch;
  setRedirect: (redirect: boolean) => Actions.SetRedirect;
}

const Cities = (props: CitiesProps) => {

  const { cities, handleClickSearch, setRedirect } = props;

  const [pageNumber, setPageNumber] = useState<number>(0);

  const citiesPerPage = 3;
  const pagesVisited = pageNumber * citiesPerPage;

  const pageCount = Math.ceil(cities.length / citiesPerPage);

  const handleSubmitSearch: (cityName: string) => void = (cityName) => {
    handleClickSearch(cityName);
    setRedirect(true);
  };

  const handlePageChange = ({ selected }: { selected: number; }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MDBContainer>
      <div className='cities-page-container page'>
        <div
          data-testid='cities-page-heading'
          className='page-heading-container'
        >
          <h1 className='page-heading'>Cities</h1>
          <h2 className='page-subheading'>search walks by city</h2>
        </div>
        <div className='card-container'>
          {cities
            .slice(pagesVisited, pagesVisited + citiesPerPage)
            .map((city) => {
              const { _id, city: cityName, description, img } = city;

              return (
                <div key={_id}>
                  <CityCard
                    id={_id}
                    name={cityName}
                    description={description}
                    imgSrc={img}
                    handleSubmitSearch={handleSubmitSearch}
                  />
                </div>
              );
            })}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
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
  cities: state.citiesState.cities,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ handleClickSearch, setRedirect }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
