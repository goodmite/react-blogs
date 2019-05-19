import {put} from 'redux-saga/effects'
import {LoginFailure, LoginTryEvent, LoginTry, LoginSuccess} from "./actions";
import {LoginService} from "../../compnents/auth/login-service";
import {IAuthHTTPBody, IAuthHTTPResponse} from "../../interfaces/auth";

export function* requestLoginTryInit(action: LoginTryEvent) {

  debugger;
  let authHTTPBody = action.payload.authHTTPBody as IAuthHTTPBody;
  let history: History = action.payload.history as History;
  /**Question: we want to dispatch an action here but we dont have access to the store in workers. How do we dispatch?
  * Answer: use put. put "sort of" does the same job
  * */
  yield put({...new LoginTry()});
  try {
    let response: IAuthHTTPResponse = yield LoginService.loginSubmit(authHTTPBody);
    let user = response.user;
    yield put(new LoginSuccess({user}));
    (<any>history).push("/dashboard");
  } catch (e) {
    yield put(new LoginFailure(e))
  }
}