import React, { Component } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { signUp, authError } from '../../actions/authentication';

class Signup extends Component {

  componentWillMount() {
    this.props.authError('');
  }

  handleFormSubmit(formProps) {
    this.props.signUp(formProps);
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
    const { handleSubmit, fields: { name, email, password, passwordConfirm, job, industry, location, areas, photo } } = this.props;

    return(
      <div className="spacer50">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
              <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
                <h2>Sign Up</h2>
                <div className="spacer30"></div>
                  {this.renderAlert()}
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" { ...name } />
                  </div>
                  <div className={`fomr-group ${email.touched && email.error ? 'has-danger' : ''}`}>
                    <input type="text" className="form-control" placeholder="Email" { ...email } />
                  </div>
                  <div className={`form-group ${password.touched && password.error ? 'has-danger' : ''}`}>
                    <div className="error-message">{password.touched && password.error ? password.error : ''}</div>
                    <input type="text" className="form-control" type="password" placeholder="Password" { ...password } />
                  </div>
                  <div className={`form-group ${password.touched && password.error ? 'has-danger' : ''}`}>
                    <input type="text" className="form-control" type="password" placeholder="Confirm Password" { ...passwordConfirm } />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="What is your current job?" { ...job } />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Industry" { ...industry } />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Location" { ...location } />
                  </div>
                  <div className="form-group">
                    <label>Areas</label>
                    <div className="form-control">
                      <Field className="areas" component="select">
                        <option></option>
                        <option>Researcher</option>
                        <option>Entrepreneur--Founder (Current or Apiring)</option>
                        <option>Entrepreneur--Join a Team</option>
                        <option>Advisor</option>
                        <option>Investor</option>
                        <option>Engineer</option>
                        <option>Enthusiast</option>
                      </Field>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Photo</label>
                    <div className="form-control">
                      <input type="file" { ...photo } value={ null } />
                    </div>
                  </div>
                  <button className="btn-global" type="submit">Sign Up</button>
              </form>
              <div className="redirect">
                <p>Already have an account? <Link to={"/auth/local"}>Login</Link></p>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-bottom"></div>
      </div>
    );
  }
}

const validate = formProps => {
  const errors = {}

  if(!formProps.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formProps.email)) {
    errors.email = 'Invalid email address'
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match'
  }
  return errors;
}

function mapStateToProps(state) {
  return { error: state.authentication.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['name', 'email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, { signUp, authError })(Signup);
