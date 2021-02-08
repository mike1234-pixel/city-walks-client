import './PopUp.css'
import { useSpring, animated } from "react-spring"

const PopUp = (props) => {

    const { mapImg } = props

    const fade = useSpring({ from: { opacity: 0}, opacity: 1 })

    return (
        <animated.div className="popup-container" style={fade}>
            <div className="popup"> 
                {/* orientation will be portrait */}
                <img id="popup-img" className="popup-img" src={mapImg} />
            </div>
        </animated.div>
    )
}

export default PopUp
