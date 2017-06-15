import { createSelector } from 'reselect';

const selectClient = (state) => state.get('client');
const selectHome = (state) => state.get('home');


const makeSelectAppName = () => createSelector(
  selectClient,
  (clientState) => clientState.get('appName'),
);

const makeSelectPermisions = () => createSelector(
  selectClient,
  (clientState) => clientState.get('permisions'),
);

const makeSelectProviders = () => createSelector(
  selectHome,
  (homeState) => homeState.get('providers'),
);

export {
  selectClient,
  makeSelectAppName,
  makeSelectPermisions,
  makeSelectProviders,
};
