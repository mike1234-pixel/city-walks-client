import React, { ReactNode, useEffect, useState } from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer } from 'mdbreact'
import { FaSearchLocation } from "react-icons/fa"
import urlify from '../../../functions/urlify'
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import { GiWalkingBoot } from 'react-icons/gi'
import { connect } from 'react-redux';
import Walk from "../../../types/Walks/Walk"
import GlobalState from "../../../types/State/Global/State"
import './Walks.scss'

interface Props {
    searchValue: string;
    setSearchValue: Function;
    walks: Array<Walk>;
}

const Walks: React.FC<any> = (props: Props) => {

    const { searchValue, setSearchValue, walks } = props;

    // display all walks pagination

    const [pageNumber, setPageNumber] = useState<number>(0)
    let filteredResults: ReactNode;

    const walksPerPage: number = 3;
    const pagesVisited: number = pageNumber * walksPerPage;

    const pageCount: number = Math.ceil(walks.length / walksPerPage);

    const displayAllWalks: () => Array<ReactNode> = () => {
        return (
            walks.slice(pagesVisited, pagesVisited + walksPerPage).map(v => {
                return (
                    <div key={v._id}>
                        <Link to={'walks/' + urlify(v.walk)}>
                            <MDBCard className="walk-card">
                                <MDBCardImage className="cutter img-fluid" src={v.coverImg} alt={v.walk} waves />
                                <MDBCardBody>
                                    <MDBCardTitle>{v.city}</MDBCardTitle>
                                    <MDBCardTitle className="display-font">{v.walk}</MDBCardTitle>
                                    <MDBCardText>{v.description}</MDBCardText>
                                    <MDBBtn outline color="elegant" className="city-card-btn">Explore <GiWalkingBoot /></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
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
    });

    if (searchValue === "") {
        filteredResults =
            <MDBContainer>
                <div className="min-page-height">
                    <div className="page-heading-container">
                        <h1 className="page-heading">Walks</h1>
                        <MDBBtn outline color="elegant" className="city-card-btn" onClick={() => setSearchValue("")}>Show all walks</MDBBtn>
                        <p data-testid="walks-search-icon" className="walks-search-icon"><FaSearchLocation className="search-location-icon" />{`  ${searchValue}`}</p>
                    </div>
                    <div className="card-container">
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

    } else if (walks.map((v: Walk) => { v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase()) })) {
        filteredResults =
            <MDBContainer>
                <div className="min-page-height">
                    <div className="page-heading-container">
                        <h1 className="page-heading" data-testid="walks-page-heading">Walks</h1>
                        <MDBBtn outline color="elegant" className="city-card-btn" onClick={() => setSearchValue("")}>Show all walks</MDBBtn>
                        <p data-testid="walks-search-icon" className="walks-search-icon"><FaSearchLocation className="search-location-icon" />{`  ${searchValue}`}</p>
                    </div>
                    <div className="card-container">
                        {walks.map((v: Walk) => {
                            if (v.walk.toLowerCase().includes(searchValue.toLowerCase()) || v.city.toLowerCase().includes(searchValue.toLowerCase())) {
                                return (
                                    <div key={v._id}>
                                        <Link to={'walks/' + urlify(v.walk)}>
                                            <MDBCard className="walk-card">
                                                <MDBCardImage className="cutter img-fluid" src={v.coverImg} alt={v.walk} waves />
                                                <MDBCardBody>
                                                    <MDBCardTitle>{v.city}</MDBCardTitle>
                                                    <MDBCardTitle className="display-font">{v.walk}</MDBCardTitle>
                                                    <MDBCardText>{v.description}</MDBCardText>
                                                    <MDBBtn outline color="elegant" className="city-card-btn">Explore <GiWalkingBoot /></MDBBtn>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </Link>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
            </MDBContainer>

    }

    return (
        <div>
            {filteredResults}
        </div>
    )
}

const mapStateToProps = (state: GlobalState) => ({
    walks: state.walksState.walks,
    searchValue: state.searchState.searchValue,
});

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setSearchValue: (inputValue: string) => dispatch({ type: 'HANDLE_CHANGE_SEARCH', inputValue })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Walks);