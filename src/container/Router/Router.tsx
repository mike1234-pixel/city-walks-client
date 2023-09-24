import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../../components/pages/Home/Home";
import Cities from "../../components/pages/Cities/Cities";
import Walks from "../../components/pages/Walks/Walks";
import About from "../../components/pages/About/About";
import Sights from "../../components/pages/Sights/Sights";
import Sight from "../../components/pages/Sight/Sight";
import Admin from "../../components/pages/Admin/Admin";
import NotFound404 from "../../components/pages/404/NotFound404";
import PrivacyPolicy from "../../components/pages/PrivacyPolicy/PrivacyPolicy";
import RootState from "../../types/State/Root/State";
import Location from "../../types/Generic/Location";
import Footer from "../../components/common/Footer/Footer";
import Nav from "../../components/common/Nav/Nav";
import PrivacyPopUp from "../../components/common/PopUp/PrivacyPopUp";
import Walk from "../../components/common/Walk/Walk";

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
