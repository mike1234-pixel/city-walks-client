import { useState, useEffect, useContext } from "react"
import { useHistory } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { SearchContext } from '../../context/SearchContext';
import './Nav.scss'

const Nav = () => {

  const [toggleNav, setToggleNav] = useState(false)

  const { redirect, setRedirect } = useContext(SearchContext)

  let history = useHistory()

  // wrapping this in useEffect prevents error: "cannot update a component while rendering a different component"
  useEffect(() => {
    if (redirect) {
      history.push("/walks")
      setRedirect(false)
    }
  })

  const handleClick = () => {
    setToggleNav(!toggleNav)
  }

  return (
        // <div className="nav-container">
        
            <MDBNavbar className="nav-bar" dark expand="lg">
            <MDBContainer>
                <MDBNavbarBrand>
                  <span className="white-text"><MDBNavLink className="white-text logo" to="/">City Walks</MDBNavLink></span>
                </MDBNavbarBrand>
                <MDBHamburgerToggler color="#fff" className="hamburger1" id="hamburger1" onClick={handleClick} />
                <MDBCollapse id="navbarCollapse3" isOpen={toggleNav} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink data-testid="nav-link-cities" className="white-text" to="/cities">Cities</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/walks">Walks</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/sights">Sights</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/forum">Forum</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/about">About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink className="white-text" to="/contact">Contact</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <SearchBar/>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
          // </div>
    )
  }

export default Nav