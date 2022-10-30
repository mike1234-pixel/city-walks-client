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
import "./Cities.scss";

interface Props {
  key: string;
  imgSrc: string;
  name: string;
  description: string;
  submitSearch: (cityName: string) => void;
}

const CityCard: React.FC<Props> = (props: Props) => {
  const { key, imgSrc, name, description, submitSearch } = props;

  return (
    <div key={key}>
      <MDBCard className="city-card" onClick={() => submitSearch(name)}>
        <MDBCardImage
          className="cutter img-fluid"
          src={imgSrc}
          alt={name}
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardText>{description}</MDBCardText>
          <MDBBtn outline className="city-card-btn">
            Find walks <MDBIcon icon="search" />
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default CityCard;
