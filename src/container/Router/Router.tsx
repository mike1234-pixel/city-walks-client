import React from 'react'
import Nav from '../../components/Nav/Nav'
import Home from '../../components/Pages/Home/Home'
import Cities from '../../components/Pages/Cities/Cities'
import Walks from '../../components/Pages/Walks/Walks'
import About from '../../components/Pages/About/About'
import Sights from "../../components/Pages/Sights/Sights"
import Sight from "../../components/Pages/Sight/Sight"
import Contact from '../../components/Pages/Contact/Contact'
import Boards from '../../components/Pages/LoginPage/LoggedInView/Boards'
import LoginForm from '../../components/Pages/LoginPage/LoginForm/LoginForm'
import RegistrationForm from '../../components/Pages/LoginPage/RegistrationForm/RegistrationForm'
import VerificationForm from '../../components/Pages/LoginPage/VerificationForm/VerificationForm'
import ResetPasswordForm from '../../components/Pages/LoginPage/ResetPasswordForm/ResetPasswordForm'
import ForgotPasswordForm from '../../components/Pages/LoginPage/ForgotPasswordForm/ForgotPasswordForm'
import Admin from '../../components/Pages/Admin/Admin'
import NotFound404 from '../../components/Pages/404/NotFound404'
import PrivacyPolicy from "../../components/Pages/PrivacyPolicy/PrivacyPolicy"
import PrivacyPopUp from '../../components/PopUp/PrivacyPopUp'
import Footer from '../../components/Footer/Footer'
import Walk from '../../components/Walk/Walk'
import Threads from '../../components/Pages/LoginPage/LoggedInView/Components/Threads/Threads'
import { Route, Switch, useLocation } from "react-router-dom"
import { connect } from "react-redux"
import City from '../../types/Cities/City'
import RootState from '../../types/State/Root/State'
import Location from '../../types/Generic/Location'

interface Props {
  cities: Array<City>;
  privacyPopupVisible: boolean;
}

const Router: React.FC<Props> = (props: Props) => {

  const { cities, privacyPopupVisible } = props

  const location: Location = useLocation();

  return (
    <div>
      <Nav redirect={false} />
      {privacyPopupVisible && <PrivacyPopUp />}
      <div style={{ position: "relative" }}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/cities" component={() => <Cities cities={cities} />} />
          <Route exact path="/walks" component={() => <Walks searchValue={''} walks={[]} />} />
          {/* components with a dynamic route have to passed like this (no callback) */}
          <Route path="/walks/:walks" component={Walk} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/sights" component={() => <Sights sights={[]} />} />
          <Route path="/sights/:sight" component={Sight} />
          {/* the render method here ensures the inputs in the forms don't lose focus */}
          {/* https://www.xspdf.com/resolution/59715158.html */}
          <Route exact path="/forum" render={() => <Boards boards={[]} userFirstName={''} />} />
          <Route exact path="/forum/login" render={() => <LoginForm loginEmail={''} loginPassword={''} />} />
          <Route exact path="/forum/register" render={() => <RegistrationForm registrationPassword={''} firstName={''} lastName={''} registrationEmail={''} activationMessageEmphasis={''} />} />
          <Route exact path="/forum/verify" render={() => <VerificationForm verificationEmail={''} />} />
          <Route exact path="/forum/reset-password" render={() => <ResetPasswordForm resetPasswordEmail={''} resetPasswordOldPassword={''} resetPasswordNewPassword={''} resetPasswordConfirmNewPassword={''} />} />
          <Route exact path="/forum/forgot-password" render={() => <ForgotPasswordForm forgotPasswordEmail={''} />} />
          <Route path="/forum/:board" component={Threads} />
          <Route path="/admin" component={Admin} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route component={NotFound404} />
        </Switch>
      </div>
      <Footer loggedIn={false} userId={''} />
    </div>
  )
}

const mapStateToProps: (state: RootState) => void = (state) => ({
  privacyPopupVisible: state.privacyPopupState.privacyPopupVisible
});

export default connect(mapStateToProps)(Router);


// redirect, loggedIn, userId etc should be coming from the redux store, as I have initial state defined in two places currently, which is unnecessary