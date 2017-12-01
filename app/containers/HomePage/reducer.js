import { fromJS } from 'immutable';

import {
  SEARCH_CHANGED,
} from './constants';

const initialState = fromJS({ inputValue: '' });

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGED: {
      return state.set('inputValue', action.payload);
    }
    default:
      return state;
  }
}

export default homeReducer;
