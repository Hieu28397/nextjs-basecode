import { all, fork } from 'redux-saga/effects';

import userSaga from './sagas/user';

export default function* rootSagas() {
  yield all([
    fork(userSaga),
  ]);
}
