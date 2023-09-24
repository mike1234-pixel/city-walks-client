import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import React from "react";
import "./Cities.css";

interface Props {
  id: string;
  imgSrc: string;
  name: string;
  description: string;
  handleSubmitSearch: (cityName: string) => void;
}

const CityCard: React.FC<Props> = (props: Props) => {
  const { id, imgSrc, name, description, handleSubmitSearch } = props;

  return (
    <div key={id}>
      <MDBCard className='city-card' onClick={() => handleSubmitSearch(name)}>
        <MDBCardImage
          className='cutter img-fluid'
          src={imgSrc}
          alt={name}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <MDBBtn outline className='city-card-btn'>
            Find walks <MDBIcon icon='search' />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default CityCard;
