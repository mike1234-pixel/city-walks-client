import React, { ReactNode, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import { MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBContainer } from "mdbreact"
import urlify from "../../../functions/urlify"
import { connect } from 'react-redux'
import Sight from "../../../types/Sights/Sight"
import RootState from "../../../types/State/Root/State"
import "./Sights.scss"

interface Props {
    sights: Array<Sight>
}

const Sights: React.FC<Props> = (props: Props) => {

    const { sights } = props;

    const removeMarkdown: (markup: string) => string = (markup) => {
        return markup.replace(/\**/g, "").replace(/#/g, "").replace(/<br\/>/g, "")
    }

    const [pageNumber, setPageNumber] = useState<number>(0)

    const sightsPerPage: number = 3;
    const pagesVisited: number = pageNumber * sightsPerPage;

    const pageCount: number = Math.ceil(sights.length / sightsPerPage);

    const displayAllSights: () => Array<ReactNode> = () => {
        return (
            sights.slice(pagesVisited, pagesVisited + sightsPerPage).map((post: Sight) => {
                return (
                    <div key={post._id}>
                        <Link to={'/sights/' + urlify(post.title)}>
                            <MDBCard className="blog-card">
                                <MDBCardImage className="cutter img-fluid" src={post.img} alt={post.title} waves />
                                <MDBCardBody>
                                    <MDBCardTitle className="display-font">{post.title}</MDBCardTitle>
                                    <MDBCardText>{removeMarkdown(post.content.slice(0, 199) + "...")}</MDBCardText>
                                    <MDBBtn outline color="elegant" className="city-card-btn">Read <MDBIcon icon="book-open" /></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
                    </div>
                )
            }).reverse()
        )
    }

    const changePage = ({ selected }: { selected: number }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    });


    return (
        <MDBContainer>
            <div className="page">
                <div className="page-heading-container">
                    <h1 className="page-heading">Sights</h1>
                    <h2 className="page-subheading">find more sights and visitor attractions to explore</h2>
                </div>
                <div className="card-container">
                    {displayAllSights()}
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
}

const mapStateToProps: (state: RootState) => void = (state) => ({
    sights: state.sightsState.sights,
});

export default connect(mapStateToProps, null)(Sights);
