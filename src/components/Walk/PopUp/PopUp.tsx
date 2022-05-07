import React from 'react'
import { useSpring, animated } from "react-spring"
import { MDBContainer } from "mdbreact"
import './PopUp.scss'

interface Props {
    iframeLink: string;
    iframeTitle: string;
}

const PopUp: React.FC<Props> = (props: Props) => {

    const { iframeLink, iframeTitle } = props

    const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })

    return (
        <MDBContainer>
            <animated.div className="popup-container" style={fade}>
                <div className="popup">
                    {/* orientation will be portrait */}
                    <iframe
                        src={iframeLink}
                        title={iframeTitle}
                        className="popup-img"
                    >
                    </iframe>
                </div>
            </animated.div>
        </MDBContainer>
    )
}

export default PopUp
