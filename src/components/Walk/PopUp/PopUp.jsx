import './PopUp.css'

const PopUp = (props) => {

    const { mapImg, setTogglePopUp } = props

    return (
        <div className="popup-container">
            <div className="popup"> 
                {/* orientation will be portrait */}
                <img id="popup-img" className="popup-img" src={mapImg} />
            </div>
        </div>
    )
}

export default PopUp

// on click outside the image, change the state to popup hidden
// a child is limited to the stacking context of its parent in the z index