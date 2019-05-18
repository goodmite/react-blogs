// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import {LoginService} from "../compnents/auth/login-service";
import {IAuthHTTPBody, IAuthHTTPResponse, IUser} from "../interfaces/auth";

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

const authUser = (user: IUser) => {
  return {
    type: AUTH_USER,
    user
  }
}

export const unauthUser = () => {
  return {
    type: UNAUTH_USER,
  }
}

const fetchingUser = () => {
  return {
    type: FETCHING_USER,
  }
}

const fetchingUserFailure = (error: string) => {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.',
  }
}

const fetchingUserSuccess  = (uid: number, user: IUser, timestamp: Date) => {
  return {
    type: FETCHING_USER_SUCCESS,
    timestamp,
  }
};

export const fetchAndHandleAuthentication = (history: any, authHTTPBody: IAuthHTTPBody) => {

  return (dispatch: any) => {
    dispatch(fetchingUser());
    LoginService.loginSubmit(authHTTPBody)
      .then((response: IAuthHTTPResponse) => {
        let user = response.user;
        dispatch(fetchingUserSuccess(user.id, user, new Date()));
        dispatch(authUser(user));
        history.push("/dashboard");
      }).catch((error) => dispatch(fetchingUserFailure(error)));
  };
};

// const initialUserState: any = {
//   uid: "",
//   name: "",
//   lastUpdated: new Date()
// }
//
// export const user = (state = initialUserState, action: any) => {
//   switch (action.type) {
//     case FETCHING_USER_SUCCESS :
//       return {
//         ...state,
//         lastUpdated: action.timestamp,
//       };
//     default :
//       return state
//   }
// }

const initialState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  authedId: "",
}

export const users = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
        user: action.user
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: "",
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ""
      }
    default :
      return state
  }
}