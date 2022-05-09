import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBHamburgerToggler, MDBCollapse, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { connect } from 'react-redux'
import { Dispatch } from "redux"
import RootState from "../../types/State/Root/State"
import './Nav.scss'

interface Props {
  redirect: boolean;
  setRedirect: Function;
}

const Nav: React.FC<Props> = (props: Props) => {

  const [toggleNav, setToggleNav] = useState(false)

  const { redirect, setRedirect } = props;

  const pushSlug: Function = useHistory().push

  useEffect(() => {
    if (redirect) {
      pushSlug("/walks")
      setRedirect(false)
    }
  })

  const handleClick: () => void = () => {
    setToggleNav(!toggleNav)
  }

  return (
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
              <SearchBar searchValue={""} />
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  redirect: state.searchState.redirect,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setRedirect: (boolValue: boolean) => dispatch({ type: 'SET_REDIRECT', boolValue }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);