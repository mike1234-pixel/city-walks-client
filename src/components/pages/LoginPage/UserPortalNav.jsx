/** @format */

import { useState, useEffect, useContext } from "react";
import {
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom"
import { LoginContext } from "../../../context/LoginContext";
import "./UserPortalNav.css";

const UserPortalNav = () => {
  const [toggleLoginPanel, setToggleLoginPanel] = useState(false);

  const handleToggleLoginPanel = () => {
    setToggleLoginPanel(!toggleLoginPanel);
  };

  const { logOut, loggedIn } = useContext(LoginContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="user-portal" key="login-page">
        {loggedIn ? (
          <div>
          <MDBNavbar className="login-panel" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text user-portal-logo">User Portal</strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#fff"
                className="hamburger1"
                id="hamburger2"
                onClick={handleToggleLoginPanel}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={toggleLoginPanel}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a className="user-portal-link" onClick={logOut}>
                      Logout <MDBIcon icon="key" />
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>
        ) : (
          <div>
            <MDBNavbar className="login-panel" dark expand="md">
              <MDBNavbarBrand>
                <strong className="white-text user-portal-logo">User Portal</strong>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#fff"
                className="hamburger1"
                id="hamburger2"
                onClick={handleToggleLoginPanel}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={toggleLoginPanel}
                navbar
              >
                <MDBNavbarNav justify="true">
                  <MDBNavItem>
                  <Link to="/boards/login" className="user-portal-link">Login <MDBIcon icon="key" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Link to="/boards/register" className="user-portal-link">Register <MDBIcon far icon="edit" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Link to="/boards/verify" className="user-portal-link">Resend Email <MDBIcon far icon="envelope" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Link to="/boards/reset-password" className="user-portal-link">Reset Password <MDBIcon icon="unlock-alt" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                  <Link to="/boards/forgot-password" className="user-portal-link">Forgot Password <MDBIcon far icon="question-circle" /></Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>
        )}
      <br />
    </div>
  );
};

export default UserPortalNav;
