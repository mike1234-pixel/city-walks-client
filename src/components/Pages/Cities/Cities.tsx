import React, { ReactNode, useEffect, useState } from "react"
import { MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact'
import ReactPaginate from "react-paginate"
import { connect } from 'react-redux'
import { Action, Dispatch } from "redux"
import City from "../../../types/Cities/City"
import RootState from "../../../types/State/Root/State"
import './Cities.scss'

interface Props {
    cities: Array<City>;
    handleClickSearch: (cityToSearch: string) => Action;
    setRedirect: (boolValue: boolean) => Action;
}

const Cities: React.FC<any> = (props: Props) => {

    const { cities, handleClickSearch, setRedirect } = props;

    const [pageNumber, setPageNumber] = useState<number>(0)

    const citiesPerPage: number = 3;
    const pagesVisited: number = pageNumber * citiesPerPage;

    const pageCount: number = Math.ceil(cities.length / citiesPerPage);

    const submitSearch: (cityName: string) => void = (cityName) => {
        handleClickSearch(cityName)
        setRedirect(true)
    }

    const displayAllCities: () => Array<ReactNode> = () => {

        return (
            cities.slice(pagesVisited, pagesVisited + citiesPerPage).map((city) => {
                return (
                    <div key={city._id}>
                        <MDBCard className="city-card" onClick={() => submitSearch(city.city)}>
                            <MDBCardImage className="cutter img-fluid" src={city.img} alt={city.city} waves />
                            <MDBCardBody>
                                <MDBCardTitle>{city.city}</MDBCardTitle>
                                <MDBCardText>{city.description}</MDBCardText>
                                <MDBBtn outline className="city-card-btn">Find walks <MDBIcon icon="search" /></MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                )
            })
        )
    }

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <MDBContainer>
            <div className="cities-page-container min-page-height">
                <div data-testid="cities-page-heading" className="page-heading-container">
                    <h1 className="page-heading">Cities</h1>
                    <h2 className="page-subheading">search walks by city</h2>
                </div>
                <div className="card-container">{displayAllCities()}</div>
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
    )
}

const mapStateToProps: (state: RootState) => void = (state) => ({
    cities: state.citiesState.cities,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleClickSearch: (cityToSearch: string) => dispatch({ type: 'HANDLE_CLICK_SEARCH', cityToSearch }),
        setRedirect: (boolValue: boolean) => dispatch({ type: 'SET_REDIRECT', boolValue }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities);

// these cards will conduct a search and filter the walks by city -- each one will link to the walks page