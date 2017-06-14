
import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GET_PROVIDERS_ATTEMPT } from './constants';
import { getProvidersSuccess, getProvidersFailure } from './actions';
import request from '../../utils/request';

export function* getProvidersAttempt() {
  const requestURL = '/api/providers';

  try {
    const response = yield call(request, requestURL);
    yield put(getProvidersSuccess(response.data.providers));
  } catch (err) {
    yield put(getProvidersFailure(err));
  }
}

export function* providersData() {
  const watcher = yield takeLatest(GET_PROVIDERS_ATTEMPT, getProvidersAttempt);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  providersData,
];
