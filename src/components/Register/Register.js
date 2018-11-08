import React, {Component} from 'react';
import {register} from '../../actions/index';
import Select from 'react-select';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {getAuthError, getAuthRegisterSuccess} from "../../reducer/index";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {username: '', password: '', email: '', type: null};
  }

  handleSelect(event) {
   this.setState({type: event.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.register({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      type: this.state.type}
    );
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const options = [
      {label: 'Standard User', value: '1'},
      {label: 'Insurer', value: '2'},
      {label: 'Administrator', value: '3'}
    ];

    return (
      <div className="register center-form">
        {this.props.registerSuccess &&
        <div className="alert alert-success">
          Your account has been created. Please go <Link to="/">Login</Link>
        </div>
        }

        <form onSubmit={this.handleSubmit}>
          <input name="username"
                 type="text"
                 value={this.state.username}
                 onChange={this.handleInputChange}
                 placeholder="Username"/>
          <input name="password"
                 type="password"
                 value={this.state.password}
                 onChange={this.handleInputChange}
                 placeholder="Password"/>
          <input name="email"
                 type="text"
                 value={this.state.email}
                 onChange={this.handleInputChange}
                 placeholder="Email"/>

          <Select
            name="type"
            className="selector"
            placeholder="Select User Type"
            openOnFocus={true}
            value={this.state.type}
            onChange={(e) => this.handleSelect(e)}
            options={options}
          />

          <input type="submit" value="Register" className="btn btn-block btn-brand"/>

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
    error: getAuthError(state),
    registerSuccess: getAuthRegisterSuccess(state)
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    register
  }, dispatch)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);