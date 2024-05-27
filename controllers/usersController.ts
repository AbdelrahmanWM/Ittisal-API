import User from '../models/User';
import{Request,Response} from 'express'
import { IUser } from '../interfaces/IUser';
import { sendErrorResponse, sendSuccessResponse } from '../utilities/Response';

export const user_list = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.find({role:"user"}).sort({ username: 1 });
        if (users.length === 0) {
            return sendErrorResponse(res, "No users found.", { code: "NO_USERS_FOUND" }, 404);
        }
        sendSuccessResponse(res, "Successfully fetched users list.", users, 200);
    } catch (error) {

        sendErrorResponse(res, "MongoDB related error.", error);
    }
};

export const user_detail = async (req: Request, res: Response): Promise<void> => {
    const {userId} = req.params;
    try {
        const user: IUser | null = await User.findById(userId);
        if (!user || user.role!='user')  {
            return sendErrorResponse(res, "User not found.", { code: "NO_USER_FOUND" }, 404);
        }

        sendSuccessResponse(res, "Successfully fetched user details.", user, 200);
    } catch (error) {

        sendErrorResponse(res, "MongoDB related error.", error);
    }
};

export const user_create = async (req: Request, res: Response): Promise<void> => {
    const userData:IUser = req.body;
    try {
        const user = new User(userData);
        await user.save();
        sendSuccessResponse(res, "Successfully added the user.", user, 200);
    } catch (error) {

        sendErrorResponse(res, "MongoDB related error.", error);
    }
};