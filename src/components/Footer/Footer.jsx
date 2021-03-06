import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { MDBIcon, MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { LoginContext } from "../../context/LoginContext"
import axios from "axios"
import { GiWalkingBoot } from 'react-icons/gi'
import './Footer.scss'

const Footer = () => {

  const { loggedIn, userId, logOut } = useContext(LoginContext)

  const deleteAccount = () => {

    const payload = {
      userId: userId,
    }

    axios.delete("https://city-walks.herokuapp.com/delete-account", {data: payload})
        .then((err) => {
            if (err) {
              console.log(err);
            }
          });
  
          alert("Account Deleted. You can sign up again at any time.")
          logOut()
          window.scrollTo(0, 0);
  }

  return (
    <MDBFooter className="font-small pt-4 mt-4 footer">
      <MDBContainer className="text-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">City Walks... <GiWalkingBoot/></h5>
            <p>
              City Walks is a website that publishes illustrated guided walks, with routes, maps and local attractions to explore.
            </p>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="3" className="footer-site-links">
            <h5 className="title">Site Links</h5>
            <ul className="footer-ul">
            <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/cities">Cities</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/walks">Walks</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/about">About</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/sights">Sights</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/forum/login">User Login</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3" className="footer-extra-links">
          <h5 className="title">Extra Links</h5>
          <ul className="footer-ul">
            <li className="list-unstyled">
                <Link to="/admin">Admin portal</Link>
            </li>
            <li className="list-unstyled">
                <Link to="/privacy">Privacy Policy</Link>
            </li>
            {loggedIn && 
            <li className="list-unstyled">
                <a onClick={deleteAccount}>Delete Account</a>
            </li>}
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright <a href='https://github.com/mike1234-pixel' target='_blank' className="footer-github-link">Michael Tandy</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;