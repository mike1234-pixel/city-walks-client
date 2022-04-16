import { useEffect } from "react"
import { MDBBtn, MDBContainer } from "mdbreact"
import { Link } from "react-router-dom"
import Carousel from '../../Carousel/Carousel'
import SectionA from '../../SectionA/SectionA'
import SectionB from '../../SectionB/SectionB'
import urlify from '../../../functions/urlify'
import { motion } from "framer-motion"
import pageTransition from "../../../constants/pageTransition"
import LocatorMap from "../../LocatorMap/LocatorMap"
import { GiWalkingBoot } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { connect } from 'react-redux'
import './Home.scss'

const Home = (props) => {

    const { walks } = props

    console.log(props)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let featuredWalks = walks.filter(walk => walk.featuredWalk === true);

    // if there are less than 3 featured walks set in the db just use the first 3 entries in walks
    if (featuredWalks.length < 3) {
        featuredWalks = walks;
    }

    if (walks.length) {
        return (
            <motion.div
                style={{ position: "relative" }}
                exit={pageTransition.out}
                animate={pageTransition.in}
                initial={pageTransition.initial}
                transition={{ duration: 0.5 }}
                className="motion-div"
            >
                <MDBContainer>
                    <div>
                        <Carousel />
                        <div className="page-heading-container featured-walks-heading-container">
                            <h2 className="page-heading"><a href="#featured-walk-1" className="featured-walks-link"><RiArrowDropDownLine /> Featured Walks <RiArrowDropDownLine /></a></h2>
                        </div>
                        <hr />

                        <Link to={"/walks/" + (urlify(featuredWalks[0].walk))}>
                            <div className="center featured-walks-h3-container" id="featured-walk-1">
                                <h3 className="featured-walks-h3">{featuredWalks[0].walk}</h3>
                            </div>
                            <SectionA content={featuredWalks[0].content1} img={featuredWalks[0].coverImg} alt={featuredWalks[0].walk} />
                            <div className="center">
                                <MDBBtn data-testid="explore-btn-1" outline color="elegant" className="featured-walks-btn">Explore {featuredWalks[0].walk} <GiWalkingBoot /></MDBBtn>
                            </div>
                        </Link>
                        <hr />
                        <Link to={"/walks/" + (urlify(featuredWalks[1].walk))}>
                            <div className="center featured-walks-h3-container">
                                <h3 className="featured-walks-h3">{featuredWalks[1].walk}</h3>
                            </div>
                            <SectionB content={featuredWalks[1].content1} img={featuredWalks[1].coverImg} alt={featuredWalks[1].walk} />
                            <div className="center">
                                <MDBBtn data-testid="explore-btn-2" className="section-b-home-btn featured-walks-btn" outline color="elegant">Explore {featuredWalks[1].walk} <GiWalkingBoot /></MDBBtn>
                            </div>
                        </Link>
                        <hr />
                        <Link to={"/walks/" + (urlify(featuredWalks[2].walk))}>
                            <div className="center featured-walks-h3-container">
                                <h3 className="featured-walks-h3">{featuredWalks[2].walk}</h3>
                            </div>
                            <SectionA content={featuredWalks[2].content1} img={featuredWalks[2].coverImg} alt={featuredWalks[2].walk} />
                            <div className="center">
                                <MDBBtn data-testid="explore-btn-3" outline color="elegant" className="featured-walks-btn">Explore {featuredWalks[2].walk} <GiWalkingBoot /></MDBBtn>
                            </div>
                        </Link>
                    </div>
                    <LocatorMap walks={walks} />
                </MDBContainer>
            </motion.div>
        )
    } else {
        return (
            <div>
                <MDBContainer>
                    <p>loading...</p>
                </MDBContainer>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    walks: state.walksState.walks
});

export default connect(mapStateToProps, null)(Home);