import { useEffect, useState, useContext } from "react"
import { MDBIcon, MDBAnimation, MDBBtn, MDBContainer } from "mdbreact"
import SectionA from '../SectionA/SectionA'
import SectionB from '../SectionB/SectionB'
import PopUp from './PopUp/PopUp'
import toTitleCase from "../../functions/toTitleCase"
import PrivacyPopUp from "../PopUp/PrivacyPopUp"
import { MdLocationCity } from 'react-icons/md'
import { FaRoad, FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdTrain } from 'react-icons/io'
import { motion } from "framer-motion"
import pageTransition from "../../constants/pageTransition"
import { connect } from "react-redux"
import './Walk.scss'


const Walk = (props) => {

  const { walks, privacyPopupVisible } = props

  const [togglePopUp, setTogglePopUp] = useState(false)

  const walkName = toTitleCase(props.history.location.pathname.replace("/walks/", "").replace(/-/g, " "))

  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("mousedown", handleClickOutside);
  });

  let walk = "loading";
  let currentWalk;

  const handleClick = (e) => {
    setTogglePopUp(!togglePopUp)
  }

  const handleClickOutside = (e) => {
    if (e.target.id !== "popup-img" && e.target.id !== "see-map-btn" && e.target.id !== "map-icon") {
      setTogglePopUp(false)
    }
  }

  if (walks.length) {

    let selectedWalk = walks.filter((walk) => walk.walk === walkName)
    selectedWalk = selectedWalk[0]

    currentWalk = selectedWalk

    if (selectedWalk === undefined) {
      walk = "walk not found"
    } else {
      walk =
        <div>
          <div className="walk-heading-container">
            <h1 className="walk-heading display-font">{selectedWalk.walk} <MdLocationCity /> {selectedWalk.city}</h1>
            <p className="walk-description"><FaMapMarkerAlt /> {selectedWalk.description}</p>
            <p className="walk-description"><IoMdTrain /> Starting Point: {selectedWalk.startingPoint}</p>
            <p className="walk-description"><FaRoad /> Length: {selectedWalk.length}</p>
          </div>
          <SectionA content={selectedWalk.content1} img={selectedWalk.img1} alt={selectedWalk.walk} />
          <SectionB content={selectedWalk.content2} img={selectedWalk.img2} alt={selectedWalk.walk} />
          <SectionA content={selectedWalk.content3} img={selectedWalk.img3} alt={selectedWalk.walk} />
          <div className="author-info-container">
            <p>This walk was written by {selectedWalk.author}</p>
            <p>{selectedWalk.aboutTheAuthor}</p>
            <p>Connect with {selectedWalk.author.split(" ")[0]}!</p>
            <MDBAnimation reveal type="rubberBand">
              <div className="social-links">
                {selectedWalk.websiteLink !== undefined && <a href={selectedWalk.websiteLink} target="_blank"><MDBIcon icon="laptop" /></a>}
                {selectedWalk.facebookLink !== undefined && <a href={selectedWalk.facebookLink} target="_blank"><MDBIcon fab icon="facebook" /></a>}
                {selectedWalk.instagramLink !== undefined && <a href={selectedWalk.instagramLink} target="_blank"><MDBIcon fab icon="instagram" /></a>}
                {selectedWalk.twitterLink !== undefined && <a href={selectedWalk.twitterLink} target="_blank"><MDBIcon fab icon="twitter" /></a>}
              </div>
            </MDBAnimation>
          </div>
        </div>
    }
  }


  return (
    <div>
      <motion.div
        style={{ position: "relative" }}
        exit={pageTransition.out}
        animate={pageTransition.in}
        initial={pageTransition.initial}
        transition={{ duration: 0.5 }}
        className="motion-div"
      >
        <MDBContainer>
          <div data-testid="walk-page">
            <div className="min-page-height center">
              {walk}
            </div>
          </div>
        </MDBContainer>
      </motion.div>
      {!togglePopUp && <MDBBtn id="see-map-btn" onClick={handleClick}>
        See Map <MDBIcon icon="map-marked-alt" id="map-icon" />
      </MDBBtn>}
      {togglePopUp && <PopUp mapImg={currentWalk.mapImg} iframeLink={currentWalk.iframeLink} iframeTitle={currentWalk.iframeTitle} />}
    </div>
  )
}

//export default Walk
const mapStateToProps = state => ({
  walks: state.walksState.walks,
  privacyPopupVisible: state.privacyPopupState.privacyPopupVisible
});

export default connect(mapStateToProps)(Walk);
