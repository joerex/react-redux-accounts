import React, {Component} from 'react';
import {resetPassword} from '../../actions/index';
import {connect} from 'react-redux';
import {getAuthError, getAuthFailedAttempts, getAuthResetPasswordSuccess} from "../../reducer/index";

class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {email: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    resetPassword(this.props.dispatch, {email: this.state.email});
  }

  render() {
    return (
      <div className="forgot-password center-form">

        {this.props.resetSuccess &&
        <div className="alert alert-success">A password reset link has been sent to your email.</div>
        }
        {!this.props.resetSuccess &&
        <div className="alert alert-info">
          Enter your email to have a password reset link sent to your email.
        </div>
        }

        <form onSubmit={this.handleSubmit}>
          <input name="email"
                 type="text"
                 value={this.state.email}
                 onChange={(e) => this.setState({email: e.target.value})}
                 placeholder="Email"/>
          <input type="submit" value="Reset Password" className="btn btn-block btn-brand"/>

          {this.props.failedAttempts > 0 &&
          <span className="alert alert-danger">
                Incorrect username or password
            {this.props.error &&
            <span className="error">{this.props.error}</span>
            }
              </span>
          }
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    failedAttempts: getAuthFailedAttempts(state),
    error: getAuthError(state),
    resetSuccess: getAuthResetPasswordSuccess(state)
  }
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

const ForgotPassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordComponent);

export default ForgotPassword;