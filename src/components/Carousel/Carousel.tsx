import React from "react"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact"
import carouselImage1 from "./assets/carousel-illustration-1-2.jpg"
import carouselImage2 from "./assets/carousel-illustration-2-2.jpg"
import carouselImage3 from "./assets/carousel-illustration-3-2.jpg"
import './Carousel.scss'

const Carousel: React.FC = () => {
  return (
    <div className="home-carousel">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView className='carousel-view'>
              <img
                className="d-block w-100 carousel-img"
                src={carouselImage1}
                alt="First slide"
              />
              <MDBMask />
            </MDBView>
            <MDBCarouselCaption className="carousel-caption">
              <h3 className="h3-responsive">Explore</h3>
              <p>the history of cities, their landmarks and hidden gems.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView className='carousel-view'>
              <img
                className="d-block w-100 carousel-img"
                src={carouselImage2}
                alt="Second slide"
              />
              <MDBMask />
            </MDBView>
            <MDBCarouselCaption className="carousel-caption">
              <h3 className="h3-responsive">Discover</h3>
              <p>local attractions, landmarks, museums and public spaces.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView className='carousel-view'>
              <img
                className="d-block w-100 carousel-img"
                src={carouselImage3}
                alt="Third slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption className="carousel-caption">
              <h3 className="h3-responsive">Share</h3>
              <p>your experiences and recommendations.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Carousel;