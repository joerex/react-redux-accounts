import React, {Component} from 'react';
import {getAuthFailedAttempts, getAuthError} from '../../reducer';
import {clearError} from '../../actions';
import {connect} from 'react-redux';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {username: '', password: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(this.props.action({username: this.state.username, password: this.state.password}));
  }

  handleInputChange(event) {
    if (this.props.error) {
      this.props.dispatch(clearError());
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="login center-form">
        <form onSubmit={this.handleSubmit}>
          <input name="username"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleInputChange}
                 placeholder="Username" />
          <input name="password"
                 type="password"
                 value={this.state.password}
                 onChange={this.handleInputChange}
                 placeholder="Password" />
          <input type="submit" value="Login" className="btn btn-block btn-brand" />

          { this.props.error &&
          <div className="alert alert-danger">{this.props.error}</div>
          }

          <a href={this.props.forgotPasswordLink} target="_blank">Forgot password?</a>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    failedAttempts: getAuthFailedAttempts(state),
    error: getAuthError(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default Login;