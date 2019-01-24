import { UserServices }  from '../services';

import * as AlertActions from './alertActions';

import Utils from '../utils';

export function login(username, password){
    return dispatch => {
        dispatch( { type : Utils.USERACTION.LOGIN_REQUEST, user : username } );
        UserServices.login(username, password)
        .then( user => {
            dispatch( { type : Utils.USERACTION.LOGIN_SUCCESS, user : username } );
            //Utils.History.push('/home');
        })
        .catch( err => {
            dispatch( { type : Utils.USERACTION.LOGIN_FAILURE, error : err.message });
            dispatch( { type : Utils.ALERTACTIONS.ERROR, message: err.message });
        });
    };
}


export function logout (){
   
   return dispatch => {
        UserServices.logout();
       dispatch( { type : Utils.USERACTION.LOGOUT });
   };
}

export function register(user, password){
    return dispatch => {

        dispatch({ type : Utils.USERACTION.REGISER_REQUEST, user});

        UserServices.register(user, password)
        .then( user => {
            dispatch( { type : Utils.USERACTION.REGISTER_SUCCESS, user });

            
            dispatch( {type: Utils.ALERTACTIONS.SUCCESS, message: user.message } );

            /*Utils.History.push('/home');*/
        })
        .catch( err => {
            dispatch( { type : Utils.USERACTION.REGISTER_FAILURE, error : err.message } );
            dispatch( { type : Utils.ALERTACTIONS.ERROR, message : err.message });
        });
    };
}
