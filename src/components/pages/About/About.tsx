import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { MDBContainer } from "mdbreact"
import { GiWalkingBoot } from 'react-icons/gi'
import { motion } from "framer-motion"
import pageTransition from "../../../constants/pageTransition"
import './About.scss'


const About: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    <div className="page-heading-container min-page-height">
                        <h1 className="page-heading">About</h1>
                        <div className="about-page-container">
                            <p>City Walks is a website that publishes illustrated guided walks.</p>
                            <p>Each <Link to="/walks">Walk</Link> provides a guided tour of a district within a city, pointing out local attractions, accompanied by a map of the route.</p>
                            <p>Some visitor atractions are described in more detail on the <Link to="/sights">Sights</Link> page, and users can share their own recommendations on the <Link to="/boards">Forum</Link>.</p>
                            <p>It is recommended setting aside a full day for each walk to allow yourself the time to fully explore the local attractions.</p>
                            <p>The walks utilise public transport for their start and end points.</p>
                            <p className="walking-icon">... <GiWalkingBoot /></p>
                        </div>
                    </div>
                </div>
            </MDBContainer>
        </motion.div>
    )
}

export default About