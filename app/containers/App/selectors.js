import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectMainDomain = (state) => state;

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectMain = () => createSelector(
  selectMainDomain,
  (substate) => substate.toJS(),
);

export {
  makeSelectLocation,
  makeSelectMain,
};
