import { ReactNode } from "react";
import {
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBMask,
  MDBView,
} from "mdbreact";

interface SlideProps {
  slideNumber: number;
  title: string;
  description: string;
  children?: ReactNode | ReactNode[];
}

const Slide = (props: SlideProps) => {
  const { slideNumber, title, description, children } = props;

  return (
    <MDBCarouselItem itemId={slideNumber}>
      <MDBView className="carousel-view">
        {children}
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
