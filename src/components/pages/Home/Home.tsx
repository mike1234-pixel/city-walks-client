import { useEffect } from "react";
import { MDBBtn, MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";
import Carousel from "../../common/Carousel/Carousel";
import urlify from "../../../utils/urlify";
import { GiWalkingBoot } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { connect } from "react-redux";
import Walk from "../../../types/Walks/Walk";
import { RootState } from "../../../store";
import LoadingBar from "../../common/LoadingBar/LoadingBar";
import LocatorMap from "../../common/LocatorMap/LocatorMap";
import Section from "../../common/Section/Section";
import "./Home.css";

interface HomeProps {
  walks: Array<Walk>;
}

const Home = (props: HomeProps) => {
  const { walks } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let featuredWalks: Array<Walk> = walks.filter((walk) => walk.featuredWalk);

  // if there are less than 3 featured walks set in the db just use the first 3 entries in walks
  if (featuredWalks.length < 3) {
    featuredWalks = walks;
  }

  if (!walks.length) {
    return <MDBContainer><LoadingBar /></MDBContainer>;
  }

  return (
    <MDBContainer>
      <div>
        <Carousel />
        <div className='page-heading-container featured-walks-heading-container'>
          <h2 className='page-heading'>
            <RiArrowDropDownLine /> Featured Walks <RiArrowDropDownLine />
          </h2>
        </div>
        <hr />

        <Link to={"/walks/" + urlify(featuredWalks[0].walk)}>
          <div
            className='center featured-walks-h3-container'
            id='featured-walk-1'
          >
            <h3 className='featured-walks-h3'>{featuredWalks[0].walk}</h3>
          </div>
          <Section
            content={featuredWalks[0].content1}
            zoom={true}
            waves={true}
          >
            <img className='grid-item-img' src={featuredWalks[0].coverImg} alt={featuredWalks[0].walk} />
          </Section>
          <div className='center'>
            <MDBBtn
              data-testid='explore-btn-1'
              outline
              color='elegant'
              className='featured-walks-btn'
            >
              Explore {featuredWalks[0].walk} <GiWalkingBoot />
            </MDBBtn>
          </div>
        </Link>
        <hr />
        <Link to={"/walks/" + urlify(featuredWalks[1].walk)}>
          <div className='center featured-walks-h3-container'>
            <h3 className='featured-walks-h3'>{featuredWalks[1].walk}</h3>
          </div>
          <Section
            content={featuredWalks[1].content1}
            zoom={true}
            waves={true}
            imageLeft={true}
          >
            <img className='grid-item-img' src={featuredWalks[1].coverImg} alt={featuredWalks[1].walk} />
          </Section>
          <div className='center'>
            <MDBBtn
              data-testid='explore-btn-2'
              className='section-b-home-btn featured-walks-btn'
              outline
              color='elegant'
            >
              Explore {featuredWalks[1].walk} <GiWalkingBoot />
            </MDBBtn>
          </div>
        </Link>
        <hr />
        <Link to={"/walks/" + urlify(featuredWalks[2].walk)}>
          <div className='center featured-walks-h3-container'>
            <h3 className='featured-walks-h3'>{featuredWalks[2].walk}</h3>
          </div>
          <Section
            content={featuredWalks[2].content1}
            zoom={true}
            waves={true}
          >
            <img className='grid-item-img' src={featuredWalks[2].coverImg} alt={featuredWalks[2].walk} />
          </Section>
          <div className='center'>
            <MDBBtn
              data-testid='explore-btn-3'
              outline
              color='elegant'
              className='featured-walks-btn'
            >
              Explore {featuredWalks[2].walk} <GiWalkingBoot />
            </MDBBtn>
          </div>
        </Link>
      </div>
      <LocatorMap walks={walks} />
    </MDBContainer>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  walks: state.walksState.walks,
});

export default connect(mapStateToProps, null)(Home);
