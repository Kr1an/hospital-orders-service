/*
 *
 * Test1 reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  users: [],
});

function test1Reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USERS':
      return state.set('users', action.payload);
    default:
      return state;
  }
}

export default test1Reducer;
