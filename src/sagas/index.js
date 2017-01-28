import { takeLatest } from 'redux-saga/effects';

import { types as rootTypes } from '../store/root';

import { startup } from './root';

export default function * root () {
  yield [
    takeLatest(rootTypes.LOAD_INIT, startup),
  ]
}
