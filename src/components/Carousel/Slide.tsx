import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBMask,
  MDBView,
} from "mdbreact";
import React from "react";

interface Props {
  slideNumber: number;
  imageSrc: string;
  imageDescription: string;
  title: string;
  description: string;
}

const Slide: React.FC<Props> = (props: Props) => {
  const { slideNumber, imageSrc, imageDescription, title, description } = props;

  return (
    <MDBCarouselItem itemId={slideNumber}>
      <MDBView className="carousel-view">
        <img
          className="d-block w-100 carousel-img"
          src={imageSrc}
          alt={imageDescription}
        />
        <MDBMask />
      </MDBView>
      <MDBCarouselCaption className="carousel-caption">
        <h3 className="h3-responsive">{title}</h3>
        <p>{description}.</p>
      </MDBCarouselCaption>
    </MDBCarouselItem>
  );
};

export default Slide;
