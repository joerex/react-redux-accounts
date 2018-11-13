import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAuthToken} from "../../reducer/index";

class Logout extends Component {
  render() {
    return (
      <a onClick={() => this.props.dispatch(this.props.action(this.props.token))}>Logout</a>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: getAuthToken(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);