import { useEffect, useState, useContext } from "react"
import { MDBIcon, MDBAnimation, MDBBtn, MDBContainer } from "mdbreact"
import SectionA from '../SectionA/SectionA'
import SectionB from '../SectionB/SectionB'
import PopUp from './PopUp/PopUp'
import toTitleCase from "../../functions/toTitleCase"
import { WalksContext } from "../../context/WalksContext"
import PrivacyPopUp from "../../components/PopUp/PopUp"
import { LoginContext } from "../../context/LoginContext"
// import { motion } from "framer-motion"
// import pageTransition from "../../constants/pageTransition"
import './Walk.scss'

const Walk = ({match}) => {

  const [togglePopUp, setTogglePopUp] = useState(false)

  const { walks, isLoading } = useContext(WalksContext)
  const { popupVisible } = useContext(LoginContext)

  const walkName = toTitleCase(match.url.replace("/walks/", "").replace(/-/g, " "))

    useEffect(() => {
        window.scrollTo(0, 0);
        document.addEventListener("mousedown", handleClickOutside);
      });

      let walk = "loading";

      const handleClick = (e) => {
        setTogglePopUp(!togglePopUp)
        console.log(e.target.id)
      }

      const handleClickOutside = (e) => {
        if (e.target.id !== "popup-img" && e.target.id !== "see-map-btn" && e.target.id !== "map-icon") {
            setTogglePopUp(false)
        }
      }

      if (!isLoading) {

        let selectedWalk = walks.filter((walk) => walk.walk === walkName)
        selectedWalk = selectedWalk[0]

        if (selectedWalk === undefined) {
          walk = "walk not found"
        } else {
            walk = 
            <div>
            <div className="walk-heading-container">
              <h1 className="walk-heading display-font">{selectedWalk.walk} <i className="far fa-flag"></i> {selectedWalk.city}</h1>
              <p className="walk-description">{selectedWalk.description}</p>
              <p className="walk-description">Starting Point: {selectedWalk.startingPoint}</p>
              <p className="walk-description">Length: {selectedWalk.length}</p>
            </div>
              <SectionA content={selectedWalk.content1} img={selectedWalk.img1} alt={selectedWalk.walk}/>
              <SectionB content={selectedWalk.content2} img={selectedWalk.img2} alt={selectedWalk.walk}/>
              <SectionA content={selectedWalk.content3} img={selectedWalk.img3} alt={selectedWalk.walk}/>
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
                {!togglePopUp && <MDBBtn id="see-map-btn" onClick={handleClick}> 
                See Map <MDBIcon icon="map-marked-alt" id="map-icon"/>
                </MDBBtn>}
                {togglePopUp && <PopUp mapImg={selectedWalk.mapImg} iframeLink={selectedWalk.iframeLink} iframeTitle={selectedWalk.iframeTitle}/>}
              </div>
          </div>
        }
      }


    return (
    
  //     <motion.div
  //     style={{ position: "relative" }}
  //     exit={pageTransition.out}
  //     animate={pageTransition.in}
  //     initial={pageTransition.initial}
  //     transition={{ duration: 0.5 }}
  //     className="motion-div"
  // >

      <MDBContainer>
      {popupVisible && <PrivacyPopUp/>}
        <div data-testid="walk-page">
          <div className="min-page-height center">
            {walk}
          </div>
        </div>
      </MDBContainer>
      // </motion.div>
    )
}

export default Walk