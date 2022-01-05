import axios from '../../utils/axios';
import { put, takeLeading, delay } from 'redux-saga/effects';

import * as getUser from '../actions';
import { GET_USERS } from '../actionTypes';

function* getUsersSaga(action) {
  yield put(getUser.actionGetUserPending());
  try {
    const { payload } = action;

    const { data } = yield axios.get(`https://jsonplaceholder.typicode.com/users?id=${+payload}`);

    if (data.length) {
      yield put(getUser.actionGetUserSuccess(data[0]));
    }
  } catch (error) {
    console.log('error=======', error);
    yield put(getUser.actionGetUserFailure(error));
  }
}

export default function* sagas() {
  yield takeLeading(GET_USERS, getUsersSaga);
}
