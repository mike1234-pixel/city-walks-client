import React from "react"
import { useHistory } from "react-router-dom"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact"
import { GiWalkingBoot } from "react-icons/gi"
import axios, { AxiosError, AxiosResponse } from "axios"
import { connect } from "react-redux"
import { Dispatch, bindActionCreators } from "redux"
import RootState from "../../types/State/Root/State"
import Account from "../../types/PostRequests/Account"
import {
  setLoggedIn,
  setUserFirstName,
  setUserId,
  setUserLastName,
} from "../../actions/actions"
import "./Footer.css"
import FooterLink from "./FooterLink"
import FooterCol from "./FooterCol"
import * as Actions from "../../types/Actions"

interface Props {
  loggedIn: boolean;
  userId: string;
  setLoggedIn: (loggedIn: boolean) => Actions.SetLoggedIn;
  setUserId: (userId: string) => Actions.SetUserId;
  setUserFirstName: (userFirstName: string) => Actions.SetUserFirstName;
  setUserLastName: (userLastName: string) => Actions.SetUserLastName;
}

const Footer: React.FC<Props> = (props: Props) => {
  const {
    loggedIn,
    userId,
    setLoggedIn,
    setUserId,
    setUserFirstName,
    setUserLastName,
  } = props

  const pushSlug: Function = useHistory().push

  const logOut = () => {
    localStorage.clear()
    localStorage.setItem("popupVisible", "false")
    setLoggedIn(false)
    setUserId("")
    setUserFirstName("")
    setUserLastName("")
    alert("Logged out successfully.")
    pushSlug("/forum")
  }

  const deleteAccount = () => {
    const payload: Account = {
      userId: userId,
    }

    axios
      .delete("https://city-walks-production.up.railway.app/delete-account", {
        data: payload,
      })
      .then((res: AxiosResponse) => {
        console.log("account deleted")
      })
      .catch((err: AxiosError) => {
        console.log(err, "account not deleted, try again.")
      })

    alert("Account Deleted. You can sign up again at any time.")
    logOut()
    window.scrollTo(0, 0)
  }

  return (
    <MDBFooter className='font-small pt-4 mt-4 footer'>
      <MDBContainer className='text-left'>
        <MDBRow>
          <MDBCol md='3'>
            <h5 className='title'>
              City Walks... <GiWalkingBoot />
            </h5>
            <p>
              City Walks is a website that publishes illustrated guided walks,
              with routes, maps and local attractions to explore.
            </p>
          </MDBCol>
          <MDBCol md='3' className='offset-md-3 footer-site-links'>
            <FooterCol title='Site Links'>
              <FooterLink path='/' title='Home' />
              <FooterLink path='/cities' title='Cities' />
              <FooterLink path='/walks' title='Walks' />
              <FooterLink path='/about' title='About' />
              <FooterLink path='/sights' title='Sights' />
              <FooterLink path='/contact' title='Contact' />
              <FooterLink path='/forum/login' title='User Login' />
            </FooterCol>
          </MDBCol>
          <MDBCol md='3' className='footer-extra-links'>
            <FooterCol title='Extra Links'>
              <FooterLink path='/admin' title='Admin Portal' />
              <FooterLink path='/privacy' title='Privacy Policy' />
              {loggedIn && (
                <li className='list-unstyled'>
                  <a onClick={deleteAccount}>Delete Account</a>
                </li>
              )}
            </FooterCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright{" "}
          <a
            href='https://github.com/mike1234-pixel'
            target='_blank'
            className='footer-github-link'
          >
            Michael Tandy
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  loggedIn: state.loginState.loggedIn,
  userId: state.loginState.userId,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      { setLoggedIn, setUserId, setUserFirstName, setUserLastName },
      dispatch
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
