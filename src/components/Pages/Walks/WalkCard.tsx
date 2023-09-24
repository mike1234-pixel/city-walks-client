import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import { Link } from "react-router-dom";
import { GiWalkingBoot } from "react-icons/gi";
import urlify from "../../../utils/urlify";
import "./Walks.css";

interface WalkCardProps {
  id: string;
  imgSrc: string;
  name: string;
  city: string;
  description: string;
}

const WalkCard = (props: WalkCardProps) => {
  const { id, imgSrc, name, city, description } = props;

  return (
    <div key={id}>
      <Link to={"walks/" + urlify(name)}>
        <MDBCard className='walk-card'>
          <MDBCardImage
            className='cutter img-fluid'
            src={imgSrc}
            alt={name}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>{city}</MDBCardTitle>
            <MDBCardTitle className='display-font'>{name}</MDBCardTitle>
            <MDBCardText>{description}</MDBCardText>
            <MDBBtn outline color='elegant' className='city-card-btn'>
              Explore <GiWalkingBoot />
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  );
};

export default WalkCard;
