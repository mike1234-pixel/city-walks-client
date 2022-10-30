import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { Link } from "react-router-dom";
import urlify from "../../../functions/urlify";
import "./Sights.scss";

const stripMarkdown: (markup: string) => string = (markup) => {
  return markup
    .replace(/\**/g, "")
    .replace(/#/g, "")
    .replace(/<br\/>/g, "");
};

interface Props {
  id: string;
  name: string;
  imgSrc: string;
  description: string;
}

const SightCard: React.FC<Props> = (props: Props) => {
  const { id, name, description, imgSrc } = props;

  return (
    <div key={id}>
      <Link to={"/sights/" + urlify(name)}>
        <MDBCard className="blog-card">
          <MDBCardImage
            className="cutter img-fluid"
            src={imgSrc}
            alt={name}
            waves
          />
          <MDBCardBody>
            <MDBCardTitle className="display-font">{name}</MDBCardTitle>
            <MDBCardText>
              {stripMarkdown(description.slice(0, 199) + "...")}
            </MDBCardText>
            <MDBBtn outline color="elegant" className="city-card-btn">
              Read <MDBIcon icon="book-open" />
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </Link>
    </div>
  );
};

export default SightCard;
