import { useContext, useEffect, useState } from "react"
import { SearchContext } from '../../../context/SearchContext'
import { MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact'
import ReactPaginate from "react-paginate"
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import './Cities.css'

const Cities = (props) => {

    const data = props.cities

    const { handleClickSearch } = useContext(SearchContext)
    const { popupVisible } = useContext(LoginContext)

    const [pageNumber, setPageNumber] = useState(0)

    const citiesPerPage = 3;
    const pagesVisited = pageNumber * citiesPerPage;

    const pageCount = Math.ceil(data.length / citiesPerPage);

    const displayAllCities = () => {
        return (
            data.slice(pagesVisited, pagesVisited + citiesPerPage).map((city) => {
                return (
                <MDBCol key={city._id}>
                    <MDBCard className="city-card" onClick={() => handleClickSearch(city.city)}>
                        <MDBCardImage className="cutter img-fluid" src={city.img} alt={city.city} waves/>
                        <MDBCardBody>
                        <MDBCardTitle>{city.city}</MDBCardTitle>
                        <MDBCardText>{city.description}</MDBCardText>
                        <MDBBtn outline color="white" className="city-card-btn">Find walks <MDBIcon icon="search"/></MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                )
            })
        )
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <MDBContainer>
            <div className="cities-page-container min-page-height">
                {popupVisible && <PopUp/>}
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

export default Cities

// these cards will conduct a search and filter the walks by city -- each one will link to the walks page