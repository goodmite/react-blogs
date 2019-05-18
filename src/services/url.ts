export class UrlService {
  static API_ROOT = 'https://conduit.productionready.io/api';
  static getLoginUrl(){
    return this.API_ROOT + '/users/login';
  }
}