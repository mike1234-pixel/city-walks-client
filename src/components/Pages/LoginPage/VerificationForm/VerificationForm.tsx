import React from "react";
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact";
import UserPortalNav from "../UserPortalNav";
import axios, { AxiosError, AxiosResponse } from "axios";
import qs from "qs";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
import { setVerificationEmail } from "../../../../actions/actions";
import EmailToVerify from "../../../../types/PostRequests/EmailToVerify";
import RootState from "../../../../types/State/Root/State";
import * as actions from "../../../../constants/constants";
import "./VerificationForm.scss";

interface Props {
  verificationEmail: string;
  setVerificationEmail: (
    verificationEmail: string
  ) => Action<typeof actions.SET_VERIFICATION_EMAIL>;
}

const VerificationForm: React.FC<Props> = (props: Props) => {
  const { verificationEmail, setVerificationEmail } = props;

  const handleChangeVerification: (event: React.ChangeEvent<any>) => void = (
    event
  ) => {
    switch (event.target.name) {
      case "verification-email":
        setVerificationEmail(event.target.value);
        break;
    }
  };

  const handleSubmitVerification: (event: React.FormEvent) => void = (
    event
  ) => {
    console.log("handle submit verification");
    event.preventDefault();

    const payload: EmailToVerify = {
      email: verificationEmail,
    };

    axios
      .post(
        "https://city-walks.herokuapp.com/reverify-user",
        qs.stringify(payload)
      )
      .then((res: AxiosResponse) => {
        alert("Verification email sent. Check your inbox.");
        setVerificationEmail("");
        window.scrollTo(0, 0);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

  return (
    <div key="user-verification">
      <UserPortalNav loggedIn={false} />
      <MDBContainer className="page">
        <div className="verification-header-container">
          <h2 className="verification-header">Activate Your Account</h2>
          <p>
            Submit your email address to resend the verification email to
            activate your account.
          </p>
          <p>
            You must activate your account within 10 minutes of receiving the
            email.
          </p>
          <p>
            If the email link expires then submit your email address again to
            receive a fresh activation link.
          </p>
        </div>
        <form
          onSubmit={handleSubmitVerification}
          className="verification-form display-form"
        >
          <MDBInput
            key="input-5"
            type="email"
            name="verification-email"
            id="verification-email"
            value={verificationEmail}
            label="email"
            onChange={handleChangeVerification}
            required
          />
          <MDBBtn outline color="elegant" type="submit">
            Resend Email <MDBIcon far icon="paper-plane" />
          </MDBBtn>
        </form>
      </MDBContainer>
    </div>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  verificationEmail: state.loginState.verificationEmail,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setVerificationEmail }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerificationForm);
