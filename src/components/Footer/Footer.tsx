import React from 'react'
import { Link, useHistory } from "react-router-dom"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import { GiWalkingBoot } from 'react-icons/gi'
import axios, { AxiosError, AxiosResponse } from "axios"
import { connect } from 'react-redux'
import { Dispatch, Action, bindActionCreators } from 'redux'
import RootState from '../../types/State/Root/State'
import Account from '../../types/PostRequests/Account'
import { setLoggedIn, setUserFirstName, setUserId, setUserLastName } from '../../actions/actions'
import './Footer.scss'

interface Props {
  loggedIn: boolean;
  userId: string;
  setLoggedIn: (loggedIn: boolean) => Action;
  setUserId: (userId: string) => Action;
  setUserFirstName: (userFirstName: string) => Action;
  setUserLastName: (userLastName: string) => Action;
}

const Footer: React.FC<Props> = (props: Props) => {

  const { loggedIn, userId, setLoggedIn, setUserId, setUserFirstName, setUserLastName } = props

  const pushSlug: Function = useHistory().push

  const logOut = () => {
    localStorage.clear()
    localStorage.setItem('popupVisible', 'false')
    setLoggedIn(false)
    setUserId('')
    setUserFirstName('')
    setUserLastName('')
    alert('Logged out successfully.')
    pushSlug('/forum');
  }

  const deleteAccount = () => {

    const payload: Account = {
      userId: userId,
    }

    axios.delete("https://city-walks.herokuapp.com/delete-account", { data: payload })
      .then((res: AxiosResponse) => {
        console.log('account deleted')
      }).catch((err: AxiosError) => {
        console.log(err, 'account not deleted, try again.')
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
            <h5 className="title">City Walks... <GiWalkingBoot /></h5>
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

const mapStateToProps: (state: RootState) => void = (state) => ({
  loggedIn: state.loginState.loggedIn,
  userId: state.loginState.userId,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ setLoggedIn, setUserId, setUserFirstName, setUserLastName }, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);