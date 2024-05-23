import { SuccessResponse,ErrorResponse } from "../interfaces/Response";
import { Response } from "express";

export const sendSuccessResponse = <T>(res:Response,message:string,data:T,statusCode:number=200):void=>{
    const response:SuccessResponse<T>={
        status:'success',
        message,
        data,
    }
    res.status(statusCode).json(response);
};

export const sendErrorResponse = (res:Response, message:string,error:any,statusCode:number=500):void=>{
    const response:ErrorResponse={
        status:'error',
        message,
        error,
    }
    res.status(statusCode).json(response);
}