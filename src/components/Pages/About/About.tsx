import { useEffect } from "react";
import { MDBContainer } from "mdbreact";
import aboutImage1 from "./assets/samuel-johnsons-house-illustration.jpeg";
import aboutImage2 from "./assets/whitechapel-gallery-illustration.jpeg";
import aboutImage3 from "./assets/john-soanes-museum-illustration.jpeg";
import Section from "../../Section/Section";
import "./About.css";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content1: string = "We publish illustrated guided walks.";

  const content2: string =
    "Each walk provides a guided tour of a district within a city, pointing out local attractions, accompanied by a map of the route.";

  const content3: string =
    "The walks utilise public transport for their start and end points, so are accessible to all.";

  return (
    <MDBContainer>
      <div className="page-heading-container page">
        <h1 className="page-heading">About</h1>
        <div className="about-page-container">
          <Section
            content={content1}
            img={aboutImage1}
            alt={"samuel johnson's house"}
            zoom={false}
            waves={false}
          />
          <Section
            content={content2}
            img={aboutImage2}
            alt={"whitechapel gallery"}
            zoom={false}
            waves={false}
            imageLeft={true}
          />
          <Section
            content={content3}
            img={aboutImage3}
            alt={"john soane's museum"}
            zoom={false}
            waves={false}
          />
        </div>
      </div>
    </MDBContainer>
  );
};

export default About;
