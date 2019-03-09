import Utils from '../utils';
import { StpdResponseServices } from '../services'; 

export function CreateResponse(newResponse){

    return dispatch => {
        dispatch ( { type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE });
        return new Promise((resolve, reject) => {
            dispatch( { type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE_SUCCESS, response : newResponse })
            resolve(newResponse);
        });
        // return StpdResponseServices.CreateResponse(newResponse)
        // .then( res => dispatch( {type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE_SUCCESS}, res ))
        // .catch( err => dispatch({ type : Utils.STPDRESPONSEACTION.CREATE_RESPONSE_FAIL, err}));
    };

}
