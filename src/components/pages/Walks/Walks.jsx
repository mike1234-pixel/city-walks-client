import { useEffect, useContext, useState } from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact'
import { FaSearchLocation } from "react-icons/fa"
import { SearchContext } from '../../../context/SearchContext'
import urlify from '../../../functions/urlify'
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import { motion } from "framer-motion"
import pageTransition from "../../../constants/pageTransition"
import { GiWalkingBoot } from 'react-icons/gi'
import './Walks.scss'

const Walks = (props) => {

    const walksArr = props.walks

    let { searchValue, setSearchValue } = useContext(SearchContext)

    // display all walks pagination

    const [pageNumber, setPageNumber] = useState(0)

    const walksPerPage = 3;
    const pagesVisited = pageNumber * walksPerPage;

    const pageCount = Math.ceil(walksArr.length / walksPerPage);

    const displayAllWalks = () => {
        return (
            walksArr.slice(pagesVisited, pagesVisited + walksPerPage).map(v => {
                return (
                    <div key={v._id}>
                        <Link to={'walks/'+urlify(v.walk)}>
                            <MDBCard className="walk-card">
                                <MDBCardImage className="cutter img-fluid" src={v.coverImg} alt={v.walk} waves/>
                                <MDBCardBody>
                                <MDBCardTitle>{v.city}</MDBCardTitle>
                                <MDBCardTitle className="display-font">{v.walk}</MDBCardTitle>
                                <MDBCardText>{v.description}</MDBCardText>
                                <MDBBtn outline color="elegant" className="city-card-btn">Explore <GiWalkingBoot/></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
                    </div>
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
        <motion.div
            style={{ position: "relative" }}
            exit={pageTransition.out}
            animate={pageTransition.in}
            initial={pageTransition.initial}
            transition={pageTransition.duration}
            className="motion-div"
        >
        <MDBContainer>
            <div className="min-page-height">
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
        </motion.div>
    )
    } else if (walksArr.map(v => { v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase()) } )) {
        return (
        <motion.div
            style={{ position: "relative" }}
            exit={pageTransition.out}
            animate={pageTransition.in}
            initial={pageTransition.initial}
            transition={{ duration: 0.5 }}
            className="motion-div"
        >
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
                        <div key={v._id}>
                            <Link to={'walks/'+urlify(v.walk)}>
                                <MDBCard className="walk-card">
                                    <MDBCardImage className="cutter img-fluid" src={v.coverImg} alt={v.walk} waves/>
                                    <MDBCardBody>
                                    <MDBCardTitle>{v.city}</MDBCardTitle>
                                    <MDBCardTitle className="display-font">{v.walk}</MDBCardTitle>
                                    <MDBCardText>{v.description}</MDBCardText>
                                    <MDBBtn outline color="elegant" className="city-card-btn">Explore <GiWalkingBoot/></MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </Link>
                        </div>
                        )
                    }} 
                    )}
                </div>
            </div>
        </MDBContainer>
        </motion.div>
        )
    }
}

export default Walks