import mongoose, { Schema, Document, Model } from 'mongoose';
import User from './User';
import { IGroupAdmin } from '../interfaces/IGroupAdmin';

interface IGroupAdminDocument extends IGroupAdmin, Document {}

const GroupAdminSchema: Schema = new Schema({
  groupIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
  role:{type:String,enum:['groupAdmin'],default:'groupAdmin'}
});

const GroupAdmin: Model<IGroupAdminDocument> = User.discriminator<IGroupAdminDocument>(
  'GroupAdmin',
  GroupAdminSchema
);

export default GroupAdmin;