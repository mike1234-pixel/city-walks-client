import React from "react"
import { MDBCarousel, MDBCarouselInner } from "mdbreact"
import Slide from "./Slide"
import carouselImage1 from "./assets/carousel-illustration-1-2.jpg"
import carouselImage2 from "./assets/carousel-illustration-2-2.jpg"
import carouselImage3 from "./assets/carousel-illustration-3-2.jpg"
import "./Carousel.css"

const Carousel: React.FC = () => {
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
            imageSrc={carouselImage1}
            imageDescription='Shoreditch'
            title='Explore'
            description='the history of cities, their landmarks and hidden gems.'
          />
          <Slide
            slideNumber={2}
            imageSrc={carouselImage2}
            imageDescription='Edinburgh'
            title='Discover'
            description='local attractions, landmarks, museums and public spaces.'
          />
          <Slide
            slideNumber={3}
            imageSrc={carouselImage3}
            imageDescription='Barbican'
            title='Share'
            description='your experiences and recommendations.'
          />
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  )
}

export default Carousel
