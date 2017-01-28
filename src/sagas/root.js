import { put } from 'redux-saga/effects';
import { actions as rootActions } from '../store/root';

// process STARTUP actions
export function * startup (action) {
  yield put(rootActions.initLoaded('Welcome'));
}
