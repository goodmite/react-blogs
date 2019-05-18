import {IAuthHTTPBody, IAuthHTTPResponse} from "../../interfaces/auth";
import {makeReq} from "../../services/agent";
import {UrlService} from "../../services/url";


export class LoginService {
  static loginSubmit(body: IAuthHTTPBody): Promise<IAuthHTTPResponse> {
    let url: string = UrlService.getLoginUrl();
    return makeReq.post(url,body);
  };
}
