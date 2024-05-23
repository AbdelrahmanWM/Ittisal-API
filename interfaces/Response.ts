import { Response } from "express";

export interface SuccessResponse<T>{
    status: 'success';
    message: string;
    data: T;
}

export interface ErrorResponse{
    status:'error';
    message:string;
    error:any;
}