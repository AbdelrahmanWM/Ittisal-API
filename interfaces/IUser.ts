export interface IUser {
    firstName:string;
    lastName:string;
    username: string;
    email: string;
    password: string;
    role:'user'|'groupAdmin'|'admin';
    createdAt?: Date;
    updatedAt?: Date;
}

