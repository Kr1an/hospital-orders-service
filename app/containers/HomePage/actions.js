import {
  SEARCH_CHANGED,
} from './constants';

export function onSearchChange(value) {
  return {
    type: SEARCH_CHANGED,
    value,
  };
}
