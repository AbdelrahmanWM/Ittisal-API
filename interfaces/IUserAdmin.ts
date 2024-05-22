import { IUser } from "./IUser";

export interface IUserAdmin extends  IUser{
    groups: string[];
}

