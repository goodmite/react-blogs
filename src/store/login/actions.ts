import {IAuthHTTPBody, IUser} from "../../interfaces/auth";

export class LoginTryEvent {
  static type = '[login page] event login start';
  type = LoginTryEvent.type;
  constructor(public payload:{authHTTPBody?:IAuthHTTPBody, history?:History}){
    console.log(this.payload);/*to avoid shitty tslint error*/
  }
}

export class LoginTry {
  static type= '[login page] login try';
  type = LoginTry.type;
}

export class LoginSuccess {
  static type= '[login page] login success';
  type = LoginSuccess.type;
  constructor(public payload:{user:IUser}){
    console.log(this.payload);/*to avoid shitty tslint error*/
  }
}

export class LoginFailure {
  static type =  '[login page] login failure';
  type = LoginFailure.type;
  constructor(public payload:{error:any}){
    console.log(this.payload);/*to avoid shitty tslint error*/
  }
}