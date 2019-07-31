import * as userservices from './user.service';
import * as stpdpostservices from './stpdpost.services';
import * as stpdresponseservices from './stpdresponse.services';
import * as stpdVoteServices from './vote.services';

export const UserServices = { ...userservices };

export const StpdPostServices = { ...stpdpostservices };

export const StpdResponseServices = { ...stpdresponseservices};

export const StpdVoteServices  = { ...stpdVoteServices };
