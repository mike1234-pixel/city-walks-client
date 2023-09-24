import React from "react";
import Nav from "../../components/Nav/Nav";
import Home from "../../components/Pages/Home/Home";
import Cities from "../../components/Pages/Cities/Cities";
import Walks from "../../components/Pages/Walks/Walks";
import About from "../../components/Pages/About/About";
import Sights from "../../components/Pages/Sights/Sights";
import Sight from "../../components/Pages/Sight/Sight";
import Admin from "../../components/Pages/Admin/Admin";
import NotFound404 from "../../components/Pages/404/NotFound404";
import PrivacyPolicy from "../../components/Pages/PrivacyPolicy/PrivacyPolicy";
import PrivacyPopUp from "../../components/PopUp/PrivacyPopUp";
import Footer from "../../components/Footer/Footer";
import Walk from "../../components/Walk/Walk";
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import RootState from "../../types/State/Root/State";
import Location from "../../types/Generic/Location";

interface Props {
  redirect: boolean;
  privacyPopupVisible: boolean;
}

const Router: React.FC<Props> = (props: Props) => {
  const { redirect, privacyPopupVisible } = props;

  const location: Location = useLocation();

  return (
    <div>
      <Nav redirect={redirect} />
      {privacyPopupVisible && <PrivacyPopUp />}
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/cities" component={Cities} />
        <Route exact path="/walks" component={Walks} />
        <Route path="/walks/:walks" component={Walk} />
        <Route path="/about" component={About} />
        <Route exact path="/sights" component={Sights} />
        <Route path="/sights/:sight" component={Sight} />
        <Route path="/admin" component={Admin} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route component={NotFound404} />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps: (state: RootState) => void = (state) => ({
  privacyPopupVisible: state.privacyPopupState.privacyPopupVisible,
  redirect: state.searchState.redirect,
});

export default connect(mapStateToProps)(Router);
