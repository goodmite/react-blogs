import {/*call, put,*/ takeEvery, all, fork} from 'redux-saga/effects';;
import {LoginTryEvent} from "./login/actions";
import {requestLoginTryInit} from "./login/sagas";

// Register all your watchers
export const rootSaga = function* root() {
  yield all([
    fork(watchLoginStart),
  ])
};


function* watchLoginStart() {
  yield takeEvery(LoginTryEvent.type, requestLoginTryInit);
}