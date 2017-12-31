/**
 *
 * Test1
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTest1 from './selectors';
import reducer from './reducer';
import saga from './saga';

function Test1() {
  return (
    <div>
    </div>
  );
}

Test1.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  test1: makeSelectTest1(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'test1', reducer });
const withSaga = injectSaga({ key: 'test1', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Test1);
