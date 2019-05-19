// import {call, put, takeEvery, all, fork} from 'redux-saga/effects';
// import {numberRequestCompletedAction} from '../actions'
// import {ActionTypeEnum} from "./action-type-enum";
// import {requestLoginStart} from "./login-sagas";
//
//
// let initialNumber = 0;
//
// export const generateNewNumber = (): Promise<number> => {
//   const promise = new Promise<number>((resolve) => {
//     setTimeout(() => {
//       initialNumber += 1;
//       resolve(initialNumber)
//     }, 500)
//   });
//
//   return promise;
// }
//
// export const actionIds = {
//   GET_NUMBER_REQUEST_START: '[0] Request a new number to the NumberGenerator async service.',
//   GET_NUMBER_REQUEST_COMPLETED: '[1] NumberGenerator async service returned a new number.',
// }
//
//
// export const loginStart = {
//   type: ActionTypeEnum.LOGIN_START,
//   payload:
// }
// // ==================
// // Register all your watchers
// export const rootSaga = function* root() {
//   yield all([
//     fork(watchNewGeneratedNumberRequestStart),
//     fork(watchLoginStart),
//   ])
// }
//
// function* watchLoginStart() {
//   yield takeEvery(ActionTypeEnum.LOGIN_START, requestLoginStart);
// }
//
// function* watchNewGeneratedNumberRequestStart() {
//   yield takeEvery(actionIds.GET_NUMBER_REQUEST_START, requestNewGeneratedNumber);
// }
//
// function* requestNewGeneratedNumber() {
//   debugger;
//   const generatedNumber = yield call(generateNewNumber);
//   yield put(numberRequestCompletedAction(generatedNumber))
// }