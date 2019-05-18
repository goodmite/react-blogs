export interface IAuthHTTPBody {
  "user": { "email": "asdasds@asdas.com", "password": "asdasds@asdas.com" }
}

export interface IUser{
  "id": 53867,
  "email": "asdasds@asdas.com",
  "createdAt": "2019-04-22T13:14:47.890Z",
  "updatedAt": "2019-04-22T13:14:47.895Z",
  "username": "asdasdsd",
  "bio": null,
  "image": null,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTM4NjcsInVzZXJuYW1lIjoiYXNkYXNkc2QiLCJleHAiOjE1NjMxMjI5MzN9.umCG4GZXUrkkRCF1ju4wHEfEwIpegyRtEwFrTD67c4I"
}

export interface IAuthHTTPResponse {
  "user": IUser
}

export interface IAuth {

}