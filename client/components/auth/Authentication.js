import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(Component) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componetWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <Component { ...this.props } />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
