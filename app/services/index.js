import { login, logout, register, GetCurrentUser } from './user.service';
import * as stpdpostservices from './stpdpost.services';

export const UserServices = { login, logout, register, GetCurrentUser};
export const StpdPostServices = { ...stpdpostservices };
