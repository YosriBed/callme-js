import {
  call, put, takeLatest,
} from 'redux-saga/effects';

function* fetchUser(action) {
  try {
    const user = yield call('', action.payload.userId);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* saga() {
  yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
}

export default saga;
