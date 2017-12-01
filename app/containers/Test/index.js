/**
 *
 * Test
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTest from './selectors';
import reducer from './reducer';
import Wrapper from './Wrapper';
import saga from './saga';

export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Link to="/test">Test</Link>
        <Link to="/">base</Link>
      </Wrapper>
    );
  }
}

Test.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectTest(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Test);
