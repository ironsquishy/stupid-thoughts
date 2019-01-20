import { login, logout, register } from './user.service';
import { getCommunityPostsLatest, getCommunityPostsAll } from './stpdpost.services';

export const UserServices = { login, logout, register};
export const StpdPostSevices = { getCommunityPostsAll, getCommunityPostsAll };
