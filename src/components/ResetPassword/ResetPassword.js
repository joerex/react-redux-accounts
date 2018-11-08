import React, {Component} from 'react';
import {updatePassword} from '../../actions/index';
import {connect} from 'react-redux';
import {getAuthError, getAuthFailedAttempts, getAuthUpdatePasswordSuccess} from "../../reducer/index";

class ResetPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {password: '', resetToken: ''};
  }

  componentDidMount() {
    this.token = this.props.token;
    this.forceUpdate();
  }

  handleSubmit(event) {
    event.preventDefault();
    updatePassword(this.props.dispatch, {password: this.state.password, token: this.token});
  };

  render() {
    return (
      <div className="reset-password center-form">
        {(!this.props.updatePasswordSuccess && this.token) &&
        <div className="alert alert-info">
          Enter a new password.
        </div>
        }
        {this.props.updatePasswordSuccess &&
        <div className="alert alert-success">
          Your password has been reset.
        </div>
        }
        {!this.token &&
        <div className="alert alert-danger">
          There is no token.
        </div>
        }
        <form onSubmit={this.handleSubmit}>
          <input name="password"
                 type="password"
                 value={this.state.password}
                 onChange={(e) => this.setState({password: e.target.value})}
                 placeholder="Password"/>
          <input type="submit" value="Reset Password" className="btn btn-block btn-brand" disabled={(!this.token)}/>

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
    failedResetAttempts: getAuthFailedAttempts(state),
    error: getAuthError(state),
    updatePasswordSuccess: getAuthUpdatePasswordSuccess(state),
  }
};

const mapDispatchToProps = dispatch => {
  return { dispatch }
};

const ResetPassword = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordComponent);

export default ResetPassword;