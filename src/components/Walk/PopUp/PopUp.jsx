import './PopUp.css'
import { useSpring, animated } from "react-spring"
import { MDBContainer } from "mdbreact"

const PopUp = (props) => {

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
