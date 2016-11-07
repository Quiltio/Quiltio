import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authentication';
import { userTeams } from '../../actions/team';

class Navbar extends Component {

  renderNavClass() {
    if (this.props.authentication.authenticated) {
      return;
    }
  }

  loadTeams(team) {
    let { team, authentication, }
  }

  renderQuiltioLogo() {
    if (this.props.authentication.autenticated) {
      return(
        <Link to={"/home"} className="navbar-logo">
          <img alt="Logo" src="/assets/images/QUILTIO_MARK.png" />
        </Link>
      )
    } else {
      return (
        <Link to={"/"} className="navbar-logo">
          <img alt="Logo" src="/assets/images/QUILTIO_MARK.png" />
        </Link>
      )
    }
  }

  renderNavLinks() {
    const { authentication, signOut } = this.props;
    //If user is logged in
    if (authentication.authenticated && authentication.currentUser) {
      return(
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to={`/user/${authentication.currentUser.id}/profile`} className="nav-link">
              <i className="fa fa-icon-user" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`user/${authentication.currentUser.id}/teams`} className="nav-link">
              <i className="fa fa-icon-group" />
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={() => signoutUser(authentication.currentUser.id)}>
              Log Out
            </a>
          </li>
        </ul>
      )
    }

    if(!authentication.authenticated) {
      return(
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link to={"/auth/local"} className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link tp={"signup"} className="nav-link">Sign Up</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top" style={this.renderNavClass()}>
          <div className="container-fluid">
            <div className="logo-container">
              {this.renderQuiltioLogo()}
            </div>
            <div className="nav-link-container">
              {this.renderNavLinks()}
            </div>
            <div className="columbia-logo">
              <img src="/client/assets/image/Columbia_University_Logo_01.jpg" id="cu-logo" />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication
  };
}

export default connect(mapStateToProps, { signOut, userTeams })(Navbar);
