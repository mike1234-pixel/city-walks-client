import './NotFound404.scss'
import { MDBContainer } from "mdbreact"

const nf404 = ({ location }) => {
    const errorMessage = `404 Error: Page not found at ${location.pathname}`
    return (
        <MDBContainer>
            <div className="nf404-page-container min-page-height">
                <div className="page-heading-container">
                    <h1 className="page-heading">{errorMessage}</h1>
                </div>
            </div>
        </MDBContainer>
    )
}

export default nf404