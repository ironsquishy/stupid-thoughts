import UserService  from '../services';

import { AlertActions } from './';
import Utils from '../utils';

export function login(username, password){
    return dispatch => {
        dispatch( { type : Utils.USERACTION.LOGIN_REQUEST, user : username } );
        UserService.login(username, password)
        .then( user => {
            dispatch( { type : Utils.USERACTION.LOGIN_SUCCESS, user : username } );

            Utils.History.push('/');
        })
        .catch( err => {
            dispatch( { type : Utils.USERACTION.LOGIN_FAILURE, error : err.toString() });
            dispatch( { type : AlertActions.error(err.toString())} );
        });
    };
}


export function logout (){
   UserService.logout();
   return { type : Utils.USERACTION.LOGOUT };
}

export function register(user){
    return dispatch => {

        dispatch({ type : Utils.USERACTION.REGISER_REQUEST, user});

        UserService.register(user)
        .then( user => {
            dispatch( { type : Utils.USERACTION.REGISTER_SUCCESS, user });

            Utils.History.push('/login');
            dispatch( AlertActions.success('Registration Successful'));
        })
        .catch( err => {
            dispatch( { type : Utils.USERACTION.REGISTER_FAILURE, error : err.toString() } );
            dispatch( AlertActions.error( err.toString() ));
        });
    };
}
