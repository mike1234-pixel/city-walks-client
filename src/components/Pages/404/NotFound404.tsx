import { MDBContainer } from "mdbreact"
import React from 'react'
import Location from "../../../types/Generic/Location"
import './NotFound404.scss'

interface Props {
    location: Location
}

const nf404: React.FC<Props> = ({ location }: { location: Location }) => {

    const errorMessage: string = `404 Error: Page not found at ${location.pathname}`

    return (
        <MDBContainer>
            <div className="nf404-page-container page">
                <div className="page-heading-container">
                    <h1 className="page-heading">{errorMessage}</h1>
                </div>
            </div>
        </MDBContainer>
    )
}

export default nf404