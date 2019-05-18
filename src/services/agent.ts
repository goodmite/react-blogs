// @ts-ignore
import superagentPromise from 'superagent-promise';
import _superagent, {SuperAgentRequest} from 'superagent';
const superagent = superagentPromise(_superagent, global.Promise);

let token:string;
// const encode: (uriComponent: string) => string = encodeURIComponent;
const tokenPlugin = (req:SuperAgentRequest) => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
};


export const setToken = (token1:string)=> {
  token1 = token;
};

const responseBody = (res: { body: any; }) => res.body;

export const makeReq = {
  del: (url: string) =>
    superagent.del(`${url}`).use(tokenPlugin).then(responseBody),
  get: (url: string) =>
    superagent.get(`${url}`).use(tokenPlugin).then(responseBody),
  put: (url: string, body:any) =>
    superagent.put(`${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url: string, body:any) =>
    superagent.post(`${url}`, body).use(tokenPlugin).then(responseBody)
};


