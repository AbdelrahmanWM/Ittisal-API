import { IUser } from "./IUser";

export interface IGroupAdmin extends  IUser{
    groups: string[];
}

