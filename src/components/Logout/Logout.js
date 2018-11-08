import React, {Component} from 'react';
import {logout} from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAuthToken} from "../../reducer/index";

class Logout extends Component {
  render() {
    return (
      <a onClick={() => this.props.logout(this.props.token)}>Logout</a>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: getAuthToken(state)
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({logout}, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);