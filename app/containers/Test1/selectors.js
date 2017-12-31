import { createSelector } from 'reselect';

/**
 * Direct selector to the test1 state domain
 */
const selectTest1Domain = (state) => state.get('test1');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Test1
 */

const makeSelectTest1 = () => createSelector(
  selectTest1Domain,
  (substate) => substate.toJS()
);

export default makeSelectTest1;
export {
  selectTest1Domain,
};
