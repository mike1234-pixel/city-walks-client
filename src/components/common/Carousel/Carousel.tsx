import { MDBCarousel, MDBCarouselInner } from "mdbreact";
import carouselImage1 from "./assets/carousel-illustration-1-2.jpg";
import carouselImage2 from "./assets/carousel-illustration-2-2.jpg";
import carouselImage3 from "./assets/carousel-illustration-3-2.jpg";
import Slide from "./Slide";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className='home-carousel'>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className='z-depth-1'
      >
        <MDBCarouselInner>
          <Slide
            slideNumber={1}
            title='Explore'
            description='the history of cities, their landmarks and hidden gems.'
          >
            <img
              className="d-block w-100 carousel-img"
              src={carouselImage1}
              alt='Shoreditch'
            />
          </Slide>
          <Slide
            slideNumber={2}
            title='Discover'
            description='local attractions, landmarks, museums and public spaces.'
          >
            <img
              className="d-block w-100 carousel-img"
              src={carouselImage2}
              alt='Edinburgh'
            />
          </Slide>
          <Slide
            slideNumber={3}
            title='Share'
            description='your experiences and recommendations.'
          >
            <img
              className="d-block w-100 carousel-img"
              src={carouselImage3}
              alt='Barbican'
            />
          </Slide>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Carousel;
