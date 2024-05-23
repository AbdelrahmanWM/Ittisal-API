import { Response } from "express";

export interface SuccessResponse<T>{
    status: 'success';
    message: string;
    data: T;
}
// Example excepted structure
// {
//     "status": "success",
//     "message": "User retrieved successfully",
//     "data": {
//       "id": "12345",
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       // other user details
//     }
//   }

export interface ErrorResponse{
    status:'error';
    message:string;
    error:any;
}
// Example excepted structure
// {
//     "status": "error",
//     "message": "User not found",
//     "error": {
//       "code": "USER_NOT_FOUND",
//       "details": "No user found with the provided ID"
//     }
//   }