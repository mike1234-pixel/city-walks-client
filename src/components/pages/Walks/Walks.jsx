import { useEffect, useContext, useState } from "react"
import { MDBIcon, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBPagination, MDBPageItem, MDBPageNav } from 'mdbreact'
import { FaSearchLocation } from "react-icons/fa"
import { SearchContext } from '../../../context/SearchContext'
import urlify from '../../../functions/urlify'
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import './Walks.css'

const Walks = (props) => {

    const walksArr = props.walks

    let { searchValue, setSearchValue } = useContext(SearchContext)
    const { popupVisible } = useContext(LoginContext)

    // display all walks pagination

    const [pageNumber, setPageNumber] = useState(0)

    const walksPerPage = 3;
    const pagesVisited = pageNumber * walksPerPage;

    const pageCount = Math.ceil(walksArr.length / walksPerPage);

    const displayAllWalks = () => {
        return (
            walksArr.slice(pagesVisited, pagesVisited + walksPerPage).map(v => {
                return (
                    <MDBCol key={v._id}>
                        <Link to={'walks/'+urlify(v.walk)}>
                            <MDBCard className="walk-card">
                                <MDBCardImage className="cutter img-fluid" src={v.coverImg} alt={v.walk} waves/>
                                <MDBCardBody>
                                <MDBCardTitle>{v.city}</MDBCardTitle>
                                <MDBCardTitle className="display-font">{v.walk}</MDBCardTitle>
                                <MDBCardText>{v.description}</MDBCardText>
                                <MDBBtn outline color="elegant" className="city-card-btn">Explore <MDBIcon icon="walking" /></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
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
      });
    
    if (searchValue === "") {
    return (
        <MDBContainer>
            <div className="min-page-height">
                {popupVisible && <PopUp/>}
                <div className="page-heading-container">
                    <h1 className="page-heading">Walks</h1>
                    <MDBBtn outline color="elegant" className="city-card-btn" onClick={() => setSearchValue("")}>Show all walks</MDBBtn>
                    <p data-testid="walks-search-icon" className="walks-search-icon"><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
                </div>
                <div  className="card-container">
                {displayAllWalks()}
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
    )
    } else if (walksArr.map(v => { v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase()) } )) {
        return (
        <MDBContainer>
            <div className="min-page-height">
                <div className="page-heading-container">
                    <h1 className="page-heading" data-testid="walks-page-heading">Walks</h1>
                    <MDBBtn outline color="elegant" className="city-card-btn" onClick={() => setSearchValue("")}>Show all walks</MDBBtn>
                    <p data-testid="walks-search-icon" className="walks-search-icon"><FaSearchLocation className="search-location-icon"/>{`  ${searchValue}`}</p>
                </div>
                <div className="card-container">
                    {walksArr.map(v => {
                    if (v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase())) {
                    return (
                        <MDBCol key={v._id}>
                            <Link to={'walks/'+urlify(v.walk)}>
                                <MDBCard className="walk-card">
                                    <MDBCardImage className="cutter img-fluid" src={v.coverImg} alt={v.walk} waves/>
                                    <MDBCardBody>
                                    <MDBCardTitle>{v.city}</MDBCardTitle>
                                    <MDBCardTitle className="display-font">{v.walk}</MDBCardTitle>
                                    <MDBCardText>{v.description}</MDBCardText>
                                    <MDBBtn outline color="elegant" className="city-card-btn">Explore <MDBIcon icon="walking" /></MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </MDBCol>
                        )
                    }} 
                    )}
                </div>
            </div>
        </MDBContainer>
        )
    }
}

export default Walks