import Utils from '../utils';
import { StpdResponseServices } from '../services'; 

export function GetResponsesByPostId(_postId){
	return dispatch => {

		dispatch( { type : Utils.STPDRESPONSEACTION.GET_RESPONSES_FETCH });

		return StpdResponseServices.GetResponsesByPostId(_postId)
			.then( currentPost => {
            
				return dispatch({ type : Utils.STPDRESPONSEACTION.GET_RESPONSES_SUCCESS, postResponses : currentPost.stpdResponses, postId : currentPost._id });
            
			})
			.catch(error => {
				return dispatch( { type : Utils.STPDRESPONSEACTION.GET_RESPONSES_FAILURE, message : error.message });
			});

	};
}

export function CreateResponse(newResponse){

	return dispatch => {
		dispatch ( { type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE, from : newResponse });
		return StpdResponseServices.CreateResponse(newResponse)
			.then( res => dispatch( {type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE_SUCCESS}, res ))
			.catch( err => dispatch({ type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE_FAIL, err}));
	};

}
