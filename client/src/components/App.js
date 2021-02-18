import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import ReqSignIn from './ReqSignIn'
import BattingShow from './BattingShow'
import FieldingShow from './FieldingShow'
import PitchingShow from './PitchingShow'
import PastTenShow from './PastTenShow'

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
        {ReqSignIn}
        </Route>
        <Route exact path="/batting">
        {BattingShow}
        </Route>
        <Route exact path="/fielding">
        {FieldingShow}
        </Route>
        <Route exact path="/pitching">
        {PitchingShow}
        </Route>
        <Route exact path="/pastTen">
        {PastTenShow}
        </Route>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
