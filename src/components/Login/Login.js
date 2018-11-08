import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {login} from '../../actions/index';
import {getAuthFailedAttempts, getAuthError} from '../../reducer/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {username: '', password: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login({username: this.state.username, password: this.state.password});
  }

  handleInputChange(event) {
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

          <p><Link to="/forgot-password">Forgot Password</Link></p>

          { this.props.failedAttempts > 0 &&
            <span className="alert alert-danger">
              Incorrect username or password
              { this.props.error &&
                <span class="error">{this.props.error}</span>
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
    error: getAuthError(state)
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    login
  }, dispatch)
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default Login;