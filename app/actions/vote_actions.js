import Utils from '../utils';
import { StpdVoteServices } from '../services';

export function Vote(voteParams){

	return dispatch => {
        
		dispatch({ type : Utils.STPDVOTEACTION.REQUEST_VOTE, isFetching : true });

		StpdVoteServices.postVote( voteParams )
			//.then( response => dispatch({type : Utils.STPDVOTEACTION.REQUEST_VOTE_SUCCESS, isFetching : false, response }))
			.then( response => {
				dispatch({type : Utils.STPDVOTEACTION.REQUEST_VOTE_SUCCESS, isFetching : false, response });
			})
			.catch(error => dispatch({ type : Utils.STPDVOTEACTION.REQUEST_VOTE_FAIL, isFecthing : false, error }));
	};
}