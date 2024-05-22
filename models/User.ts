import mongoose, {Schema,Document,Model} from 'mongoose';
import { IUser } from '../interfaces/IUser';

interface IUserDocument extends IUser,Document {};

const UserSchema: Schema = new Schema(
    {   firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        username:{type:String, required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        role:{type:String,enum:['user','groupAdmin','admin'], default:'user'}
    },
    {timestamps:true}
);

const User:Model<IUserDocument> = mongoose.model<IUserDocument>('User',UserSchema);
export default User;