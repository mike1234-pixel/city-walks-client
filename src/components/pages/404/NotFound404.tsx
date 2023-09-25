import { MDBContainer } from "mdbreact";
import Location from "../../../types/Generic/Location";
import "./NotFound404.css";

interface nf404Props {
  location: Location;
}

const nf404 = (props: nf404Props) => {

  const { location } = props;

  const errorMessage = `404 Error: Page not found at ${location.pathname}`;

  return (
    <MDBContainer>
      <div className='nf404-page-container page'>
        <div className='page-heading-container'>
          <h1 className='page-heading'>{errorMessage}</h1>
        </div>
      </div>
    </MDBContainer>
  );
};

export default nf404;
