import { useEffect } from "react";
import { MDBContainer } from "mdbreact";
import aboutImage1 from "./assets/samuel-johnsons-house-illustration.jpg";
import aboutImage2 from "./assets/whitechapel-gallery-illustration.jpg";
import aboutImage3 from "./assets/john-soanes-museum-illustration.jpg";
import Section from "../../common/Section/Section";
import "./About.css";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content1 = "We publish illustrated guided walks.";

  const content2 =
    "Each walk provides a guided tour of a district within a city, pointing out local attractions, accompanied by a map of the route.";

  const content3 =
    "The walks utilise public transport for their start and end points, so are accessible to all.";

  return (
    <MDBContainer>
      <div className="page-heading-container page">
        <h1 className="page-heading">About</h1>
        <div className="about-page-container">
          <Section
            content={content1}
            zoom={false}
            waves={false}
          >
            <img className='grid-item-img' src={aboutImage1} alt="samuel johnson's house" />
          </Section>
          <Section
            content={content2}
            zoom={false}
            waves={false}
            imageLeft={true}
          >
            <img className='grid-item-img' src={aboutImage2} alt="whitechapel gallery" />
          </Section>
          <Section
            content={content3}
            zoom={false}
            waves={false}
          >
            <img className='grid-item-img' src={aboutImage3} alt="john soane's museum" />
          </Section>
        </div>
      </div>
    </MDBContainer>
  );
};

export default About;
