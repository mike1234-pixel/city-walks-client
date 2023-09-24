import React, { ReactNode, useEffect, useState } from "react";
import { MDBIcon, MDBAnimation, MDBBtn, MDBContainer } from "mdbreact";
import SectionA from "../SectionA/SectionA";
import SectionB from "../SectionB/SectionB";
import PopUp from "./PopUp/PopUp";
import LoadingBar from "../LoadingBar/LoadingBar";
import toTitleCase from "../../functions/toTitleCase";
import { BsDot } from "react-icons/bs";
import { FaRoad, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTrain } from "react-icons/io";
import { connect } from "react-redux";
import { History } from "history";
import RootState from "../../types/State/Root/State";
import WalkI from "../../types/Walks/Walk";
import "./Walk.css";

interface Props {
  walks: Array<WalkI>;
  history: History;
}

const Walk: React.FC<Props> = (props: Props) => {
  const { walks, history } = props;

  const [togglePopUp, setTogglePopUp] = useState<boolean>(false);

  const walkName: string = toTitleCase(
    history.location.pathname.replace("/walks/", "").replace(/-/g, " ")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("mousedown", handleClickOutside);
  });

  let walk: string | ReactNode = <LoadingBar />;

  let currentWalk: WalkI | { iframeLink: string; iframeTitle: string; } = {
    iframeLink: "",
    iframeTitle: "",
  };

  const handleClick: () => void = () => {
    setTogglePopUp(!togglePopUp);
  };

  // THIS EVENT SHOULD HAVE A MORE SPECIFIC TYPE
  const handleClickOutside: (e: any) => void = (e) => {
    if (
      e.target.id !== "popup-img" &&
      e.target.id !== "see-map-btn" &&
      e.target.id !== "map-icon"
    ) {
      setTogglePopUp(false);
    }
  };

  if (walks.length) {
    let selectedWalk: Array<WalkI> | WalkI | undefined = walks.filter(
      (walk) => walk.walk === walkName
    );
    selectedWalk = selectedWalk[0];

    currentWalk = selectedWalk;

    if (!selectedWalk) {
      walk = "walk not found";
    } else {
      walk = (
        <div>
          <div className='walk-heading-container'>
            <h1 className='walk-heading'>
              {selectedWalk.walk} <BsDot /> {selectedWalk.city}
            </h1>
            <p className='walk-description'>
              <FaMapMarkerAlt /> {selectedWalk.description}
            </p>
            <p className='walk-description'>
              <IoMdTrain /> Starting Point: {selectedWalk.startingPoint}
            </p>
            <p className='walk-description'>
              <FaRoad /> Length: {selectedWalk.length}
            </p>
          </div>
          <SectionA
            content={selectedWalk.content1}
            img={selectedWalk.img1}
            alt={selectedWalk.walk}
            zoom={false}
            waves={false}
          />
          <SectionB
            content={selectedWalk.content2}
            img={selectedWalk.img2}
            alt={selectedWalk.walk}
            zoom={false}
            waves={false}
          />
          <SectionA
            content={selectedWalk.content3}
            img={selectedWalk.img3}
            alt={selectedWalk.walk}
            zoom={false}
            waves={false}
          />
          <div className='author-info-container'>
            <p>This walk was written by {selectedWalk.author}</p>
            <p>{selectedWalk.aboutTheAuthor}</p>
            <p>Connect with {selectedWalk.author.split(" ")[0]}!</p>
            <MDBAnimation reveal type='rubberBand'>
              <div className='social-links'>
                {selectedWalk.websiteLink !== undefined && (
                  <a href={selectedWalk.websiteLink} target='_blank'>
                    <MDBIcon fab icon='github' />
                  </a>
                )}
              </div>
            </MDBAnimation>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <MDBContainer>
        <div data-testid='walk-page'>
          <div className='page center'>{walk}</div>
        </div>
      </MDBContainer>
      {!togglePopUp && (
        <MDBBtn id='see-map-btn' onClick={handleClick}>
          See Map <MDBIcon icon='map-marked-alt' id='map-icon' />
        </MDBBtn>
      )}
      {togglePopUp && (
        <PopUp
          iframeLink={currentWalk.iframeLink}
          iframeTitle={currentWalk.iframeTitle}
        />
      )}
    </div>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  walks: state.walksState.walks,
});

export default connect(mapStateToProps)(Walk);
