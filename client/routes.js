import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Welcome from './components/universal/Welcome';
import Navbar from './components/universal/Navbar';
import Footer from './components/universal/Footer';
import Authentication from './components/auth/Authentication';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import User from './component/user/User.js';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Home from './components/user/Home';
import UserProfile from './components/user/UserProfile';
import CreateTeam from './components/team/CreateTeam';
import EditTeam from './components/team/EditTeam';
import TeamProfile from './components/team/TeamProfile';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Welcome} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route component={User} >
      //Specify endpoints for specific authorized user here
      <Route path="user/username" component={Authentication(Home)} />
      <Route path="user/username/profile" component={Authentication(UserProfile)} />
      <Route path="user/username/team/teamName" component={Authentication(TeamProfile)} />
    </Route>
  </Route>
);

export default Routes;
