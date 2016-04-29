import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import api from './api';

function* fetchUser(action) {
  try {
    const user = yield call(api.fetchUser, action.payload.userId);
    yield put({type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message});
  }
}

function* mySaga() {
  yield* takeEvery('USER_FETCH_REQUESTED', fetchUser);
}
