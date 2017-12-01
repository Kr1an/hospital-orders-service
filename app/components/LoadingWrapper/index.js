/**
*
* LoadingWrapper
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import Error from 'components/Error';
import Loading from 'components/Loading';


class LoadingWrapper extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      loading,
      error,
      children,
    } = this.props;
    if (loading) {
      return <Loading />;
    }
    if (error) {
      return <Error />;
    }
    if (this.props.children) {
      return children;
    }
    return null;
  }
}

LoadingWrapper.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.object,
};

export default LoadingWrapper;
