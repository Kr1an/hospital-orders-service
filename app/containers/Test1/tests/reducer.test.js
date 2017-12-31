
import { fromJS } from 'immutable';
import test1Reducer from '../reducer';

describe('test1Reducer', () => {
  it('returns the initial state', () => {
    expect(test1Reducer(undefined, {})).toEqual(fromJS({}));
  });
});
