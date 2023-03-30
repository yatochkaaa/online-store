import { makeAutoObservable } from "mobx";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  role: UserRole;
}

export class UserStore {
  _isAuth: boolean;
  _user: IUser | {};
  
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: IUser) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
