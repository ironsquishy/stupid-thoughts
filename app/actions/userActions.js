import { UserServices }  from '../services';

import * as AlertActions from './alertActions';

import Utils from '../utils';

export function login(username, password){
    return dispatch => {
        dispatch( { type : Utils.USERACTION.LOGIN_REQUEST } );
        UserServices.login(username, password)
        .then( user => {
            dispatch( { type : Utils.USERACTION.LOGIN_SUCCESS, username } );
     
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
        })
        .catch( err => {
            dispatch( { type : Utils.USERACTION.REGISTER_FAILURE, error : err.message } );
            dispatch( { type : Utils.ALERTACTIONS.ERROR, message : err.message });
        });
    };
}

export function GetCurrentUser(){
    return dispatch => {
        dispatch({ type : Utils.USERACTION.USER_FETCH});
        UserServices.GetCurrentUser()
        .then(user => {
            let { ownedPosts, ...userWithoutOwnedPosts } = user;

            dispatch({ type : Utils.USERACTION.USER_FETCH_SUCCESS, profile : {...userWithoutOwnedPosts}});

            dispatch({ type : Utils.STPDPOSTACTION.USER_OWNED_SUCCESS, ownedPosts});
        })
        .catch(err => {
            dispatch( { type : Utils.USERACTION.USER_FETCH_FAILURE, error: err.message});
            dispatch({ type : Utils.ALERTACTIONS.ERROR, message : err.message});
            dispatch({ type : Utils.USERACTION.LOGOUT});
            logout();
        });
    }
}

export function CheckAvailable(username){
    return dispatch => {
        return UserServices.checkNameAvailable(username)
        .then(isAvailable => dispatch({ type : Utils.USERACTION.USER_NAME_AVAILABLE_SUCCESS, isAvailable }))
        .catch(err => Promise.reject(dispatch({ type : Utils.USERACTION.USER_NAME_AVAILABLE_FAILURE } )));
    }
}

export function GetAllowedPost(){
    return dispatch => {
        dispatch({ type : Utils.USERACTION.USER_NAME_AVAILABLE_FETCH });
        return UserServices.getAllowedToPost()
        .then(_allowedPost => dispatch({ type : Utils.USERACTION.USER_ALLOWED_POST_SUCCESS, allowedPost : _allowedPost }))
        .catch(error => dispactch({ type : Utils.USERACTION.USER_NAME_AVAILABLE_FAILURE, isError : true }))
    }
}