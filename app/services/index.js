import { login, logout, register } from './user.service';
import * as stpdpostservices from './stpdpost.services';

export const UserServices = { login, logout, register};
export const StpdPostServices = { ...stpdpostservices };
