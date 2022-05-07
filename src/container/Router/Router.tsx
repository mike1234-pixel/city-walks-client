import React from 'react'
import Nav from '../../components/Nav/Nav'
import Home from '../../components/pages/Home/Home'
import Cities from '../../components/pages/Cities/Cities'
import Walks from '../../components/pages/Walks/Walks'
import About from '../../components/pages/About/About'
import Sights from "../../components/pages/Sights/Sights"
import Sight from "../../components/pages/Sight/Sight"
import Contact from '../../components/pages/Contact/Contact'
import Boards from '../../components/pages/LoginPage/LoggedInView/Boards'
import LoginForm from '../../components/pages/LoginPage/LoginForm/LoginForm'
import RegistrationForm from '../../components/pages/LoginPage/RegistrationForm/RegistrationForm'
import VerificationForm from '../../components/pages/LoginPage/VerificationForm/VerificationForm'
import ResetPasswordForm from '../../components/pages/LoginPage/ResetPasswordForm/ResetPasswordForm'
import ForgotPasswordForm from '../../components/pages/LoginPage/ForgotPasswordForm/ForgotPasswordForm'
import Admin from '../../components/pages/Admin/Admin'
import NotFound404 from '../../components/pages/404/NotFound404'
import PrivacyPolicy from "../../components/pages/PrivacyPolicy/PrivacyPolicy"
import PrivacyPopUp from '../../components/PopUp/PrivacyPopUp'
import Footer from '../../components/Footer/Footer'
import Walk from '../../components/Walk/Walk'
import Threads from '../../components/pages/LoginPage/LoggedInView/Components/Threads/Threads'
import { Route, Switch, useLocation } from "react-router-dom"
import { connect } from "react-redux"
import City from '../../types/Cities/City'
import GlobalState from '../../types/State/Global/State'
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
      <Nav />
      {privacyPopupVisible && <PrivacyPopUp />}
      <div style={{ position: "relative" }}>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={() => <Home walks={[]} />} />
          <Route path="/cities" component={() => <Cities cities={cities} />} />
          <Route exact path="/walks" component={() => <Walks />} />
          {/* components with a dynamic route have to passed like this (no callback) */}
          <Route path="/walks/:walks" component={Walk} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/sights" component={() => <Sights sights={[]} />} />
          <Route path="/sights/:sight" component={Sight} />
          {/* the render method here ensures the inputs in the forms don't lose focus */}
          {/* https://www.xspdf.com/resolution/59715158.html */}
          <Route exact path="/forum" render={() => <Boards boards={[]} userFirstName={''} />} />
          <Route exact path="/forum/login" render={() => <LoginForm />} />
          <Route exact path="/forum/register" render={() => <RegistrationForm registrationPassword={''} />} />
          <Route exact path="/forum/verify" render={() => <VerificationForm />} />
          <Route exact path="/forum/reset-password" render={() => <ResetPasswordForm />} />
          <Route exact path="/forum/forgot-password" render={() => <ForgotPasswordForm />} />
          <Route path="/forum/:board" component={Threads} />
          <Route path="/admin" component={Admin} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route component={NotFound404} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

const mapStateToProps = (state: GlobalState) => ({
  privacyPopupVisible: state.privacyPopupState.privacyPopupVisible
});

export default connect(mapStateToProps)(Router);
