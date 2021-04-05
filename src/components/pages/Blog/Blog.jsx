import { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import ReactPaginate from "react-paginate"
import PopUp from "../../PopUp/PopUp"
import { LoginContext } from "../../../context/LoginContext"
import { MDBBtn, MDBIcon, MDBCard, MDBCol, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBContainer} from  "mdbreact"
import urlify from "../../../functions/urlify"
import "./Blog.css"

const Blog = (props) => {

    const { popupVisible } = useContext(LoginContext)

    const { blogPosts } = props;

    const removeMarkdown = (markup) => {
        return markup.replace(/\**/g, "").replace(/#/g, "").replace(/<br\/>/g, "")
      }

    const [pageNumber, setPageNumber] = useState(0)

    const sightsPerPage = 3;
    const pagesVisited = pageNumber * sightsPerPage;

    const pageCount = Math.ceil(blogPosts.length / sightsPerPage);

    const displayAllSights = () => {
        return (
            blogPosts.slice(pagesVisited, pagesVisited + sightsPerPage).map((post) => {
                return (
                    <MDBCol key={post._id}>
                        <Link to={'/sights/'+urlify(post.title)}>
                            <MDBCard className="blog-card">
                                <MDBCardImage className="cutter img-fluid" src={post.img} alt={post.title} waves/>
                                <MDBCardBody>
                                <MDBCardTitle className="display-font">{post.title}</MDBCardTitle>
                                <MDBCardText>{removeMarkdown(post.content.slice(0,199) + "...")}</MDBCardText>
                                <MDBBtn outline color="elegant" className="city-card-btn">Read <MDBIcon icon="book-open" /></MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Link>
                    </MDBCol>
                )
            }).reverse()
        )
    }

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      });


    return (
        <MDBContainer>
            <div className="min-page-height">
                {popupVisible && <PopUp/>}
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

export default Blog

