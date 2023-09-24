import React from "react";
import { MDBContainer } from "mdbreact";
import "./PopUp.css";

interface Props {
  iframeLink: string;
  iframeTitle: string;
}

const PopUp: React.FC<Props> = (props: Props) => {
  const { iframeLink, iframeTitle } = props;

  return (
    <MDBContainer>
      <div className='popup-container'>
        <div className='popup'>
          {/* orientation will be portrait */}
          <iframe
            src={iframeLink}
            title={iframeTitle}
            className='popup-img'
          ></iframe>
        </div>
      </div>
    </MDBContainer>
  );
};

export default PopUp;
