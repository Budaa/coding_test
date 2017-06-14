import {
  GET_PROVIDERS_ATTEMPT,
  GET_PROVIDERS_SUCCESS,
  GET_PROVIDERS_FAILURE,
} from './constants';


export const getProvidersAttempt = () => ({ type: GET_PROVIDERS_ATTEMPT });
export const getProvidersSuccess = (providers) => ({ type: GET_PROVIDERS_SUCCESS, providers });
export const getProvidersFailure = (errorCode) => ({ type: GET_PROVIDERS_FAILURE, errorCode });

