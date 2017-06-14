import { fromJS } from 'immutable';

import {
  GET_PROVIDERS_ATTEMPT,
  GET_PROVIDERS_SUCCESS,
  GET_PROVIDERS_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  providers: null,
  attemptingToGetProviders: false,
  errorCode: null,
});

function homeReducer(state = initialState, { type, providers, errorCode }) {
  switch (type) {
    case GET_PROVIDERS_ATTEMPT:
      return state
        .set('attemptingToGetProviders', true);
    case GET_PROVIDERS_SUCCESS:
      return state.merge({
        attemptingToGetProviders: false,
        providers,
      });
    case GET_PROVIDERS_FAILURE:
      return state.merge({
        attemptingToGetProviders: false,
        errorCode,
      });
    default:
      return state;
  }
}

export default homeReducer;
