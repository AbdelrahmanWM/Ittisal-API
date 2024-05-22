import { IUser } from "./IUser";

export interface IAdmin extends IUser{
    role:'admin';
    permissions:string[];
}