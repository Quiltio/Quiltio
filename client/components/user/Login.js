import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { login, authError } from '../../actions/authentication';

class Login extends Component {

  componentWillMount() {
    this.props.authError('');
  }

  handleFormSubmit(formPorps) {
    this.props.login(formProps);
  }

  renderAlert() {
    if(this.props.error) {
      return(
        <div className="message-info">
          {this.props.error}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return(
      <div className="spacer50">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <h2>Login</h2>
                <div className="spacer30"></div>
                  {this.renderAlert()}
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" { ...email } />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" type="password" placeholder="Password" { ...password } />
                  </div>
                  <button className="btn-global" type="submit">Login</button>
              </form>
              <div className="redirect">
                <p>Don't have an account yet? <Link tp={"/signup"}>Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-bottom"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { error: state.authentication.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
}, mapStateToProps, { login, authError })(Login);
