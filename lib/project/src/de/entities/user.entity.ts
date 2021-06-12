import { v4 } from "uuid";

export interface IUser {
  id: string;
  username: string;
  password: string;
}

class User implements IUser {
  private _id: string;
  private _username: string;
  private _password: string;

  constructor(username: string, password: string) {
    this._id = v4();
    this._username = username;
    this._password = password;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

export default User;