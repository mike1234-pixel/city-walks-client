import { MDBContainer } from "mdbreact";
import "./PopUp.css";

interface PopUpProps {
  iframeLink: string;
  iframeTitle: string;
}

const PopUp = (props: PopUpProps) => {
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
