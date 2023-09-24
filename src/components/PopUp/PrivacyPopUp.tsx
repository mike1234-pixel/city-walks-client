import React from "react";
import { MDBBtn, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
import { setPrivacyPopupVisible } from "../../actions/actions";
import * as Actions from "../../types/Actions";
import "./PrivacyPopUp.css";

interface PrivacyPopUpProps {
  setPrivacyPopupVisible: (popupVisible: boolean) => Actions.SetPopupVisible;
}

const PrivacyPopUp = (props: PrivacyPopUpProps) => {
  const { setPrivacyPopupVisible } = props;

  const handlePrivacyPopup: () => void = () => {
    setPrivacyPopupVisible(false);
    localStorage.setItem("popupVisible", "false");
  };

  return (
    <MDBContainer>
      <div className='popup-container-cookies'>
        <div className='popup-cookies'>
          <p>
            To make City Walks work, we log user data. By using City Walks, you
            agree to our{" "}
            <Link to='/privacy' className='popup-link'>
              Privacy Policy
            </Link>
            , including cookie policy.
          </p>
          <p className='popup-google-note'>
            <a
              target='_blank'
              href='https://policies.google.com/terms'
              className='popup-link'
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
          <MDBBtn onClick={handlePrivacyPopup} className='popup-accept-btn'>
            Accept
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setPrivacyPopupVisible }, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(PrivacyPopUp);
