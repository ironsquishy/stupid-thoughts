//import { login, logout, register, GetCurrentUser, checkNameAvailable } from './user.service';
import * as userservices from './user.service';
import * as stpdpostservices from './stpdpost.services';
import * as stpdresponseservices from './stpdresponse.services';

export const UserServices = { ...userservices }
//export const UserServices = { login, logout, register, GetCurrentUser, checkNameAvailable};
export const StpdPostServices = { ...stpdpostservices };

export const StpdResponseServices = { ...stpdresponseservices};
