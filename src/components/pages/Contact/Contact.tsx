import React from 'react'
import { useState, useEffect } from "react"
import { MDBInput, MDBBtn, MDBIcon, MDBContainer } from "mdbreact"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { connect } from 'react-redux'
import Message from '../../../types/PostRequests/Message'
import RootState from '../../../types/State/Root/State'
import "./Contact.scss"

interface Props {
  sitekey: string;
}

const Contact: React.FC<Props> = (props: Props) => {

  const { sitekey } = props

  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactMessage, setContactMessage] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange: (event: React.ChangeEvent<any>) => void = (event) => {
    switch (event.target.name) {
      case "contact-name":
        setContactName(event.target.value);
        break;
      case "contact-email":
        setContactEmail(event.target.value);
        break;
      case "contact-message":
        setContactMessage(event.target.value);
        break;
    }
  };

  const handleSubmit: (event: React.FormEvent) => void = (event) => {
    event.preventDefault();

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(sitekey, { action: 'submit' }).then((token: string) => {
        submitData(token);
      });
    });

    const submitData = (token: string) => {

      const payload: Message = {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
        gRecaptchaResponse: token
      };

      axios
        .post("https://city-walks.herokuapp.com/contact-form", qs.stringify(payload))
        .then((res: AxiosResponse) => {
          if (res.data === "request failed recaptcha") {
            alert("request failed recaptcha.")
          } else {
            alert("Thanks for getting in touch. We will be in touch shortly.");
            setContactName("");
            setContactEmail("");
            setContactMessage("");
            window.scrollTo(0, 0);
          }
        }).catch((err: AxiosError) => {
          console.log(err)
        });
    };
  }

  return (
    <MDBContainer>
      <div>
        <div className="page-heading-container min-page-height">
          <h1 className="page-heading">Contact</h1>
          <form onSubmit={handleSubmit} className="contact-form display-form">
            <MDBInput
              key="input-5"
              type="text"
              name="contact-name"
              id="contact-name"
              value={contactName}
              label="name"
              onChange={handleChange}
              required
            />
            <MDBInput
              key="input-6"
              type="email"
              name="contact-email"
              id="contact-email"
              value={contactEmail}
              label="email"
              onChange={handleChange}
              required
            />
            <MDBInput
              key="input-7"
              type="textarea"
              rows="5"
              name="contact-message"
              id="contact-message"
              value={contactMessage}
              label="message"
              onChange={handleChange}
              required
            />
            <MDBBtn outline color="elegant" type="submit" id="contact-submit-btn">
              Send Message <MDBIcon far icon="paper-plane" />
            </MDBBtn>
          </form>
        </div>
      </div>
    </MDBContainer>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  sitekey: state.recaptchaState.sitekey,
});

export default connect(mapStateToProps)(Contact);
