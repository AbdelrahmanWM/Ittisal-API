import mongoose, { Schema, Document, Model } from 'mongoose';
import User from './User';
import { IAdmin } from '../interfaces/IAdmin';

interface IAdminDocument extends IAdmin,Document {}

const AdminSchema:Schema = new Schema({
    permissions:[{type:String}],
    role:{type:String, enum:['admin'],default:'admin'}
});

const Admin:Model<IAdminDocument> = User.discriminator<IAdminDocument>(
    'Admin',
    AdminSchema
);
export default Admin;