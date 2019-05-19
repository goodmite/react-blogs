import {LoginFailure, LoginTry, LoginSuccess} from "./actions";
import {IUser} from "../../interfaces/auth";

interface ILoginState {
  user: IUser | null,
  isFetching: boolean
  isAuthed: boolean,
  error: any
}

const initialState: ILoginState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  user: null
};

export const user: (state: ILoginState, action: any) => ILoginState = (state = initialState, action: any/*TODO: use union types*/) => {
  switch (action.type) {
    case LoginTry.type :
      return {
        ...state,
        isFetching: true
      };
    case LoginSuccess.type :
      return {
        ...state,
        user: ((action as LoginSuccess).payload.user),
        isFetching: false,
        isAuthed:true
      };
    case LoginFailure.type :
      return {
        ...state,
        error: ((action as LoginFailure).payload.error),
        isFetching: false
      };
    default :
      return state
  }
}
