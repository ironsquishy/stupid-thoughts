export const WEBSOCK_URL = 'http://localhost:3010/websock/btc';
export const API_URL = (process.env.NODE_ENV == 'production') ? 'https://api.thoughtfullystupid.com' : '';


export const ALERTACTIONS = {
    SUCCESS : 'ALERT_SUCCESS',
    ERROR : 'ALERT_ERROR',
    CLEAR : 'ALERT_CLEAR'
};

export const USERACTION = {
    REGISER_REQUEST : 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS : 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE : 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST : 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS : 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE : 'USERS_LOGIN_FAILURE',

    LOGOUT : 'USERS_LOGOUT',

    GETALL_REQUEST : 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS : 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE : 'USERS_GETALL_FAILURE',

    DELETE_REQUEST : 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS : 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE : 'USERS_DELETE_FAILURE',

    USER_FETCH : 'USER_FETCH',
    USER_FETCH_SUCCESS : 'USER_FETCH_SUCCESS',
    USER_FETCH_FAILURE : 'USER_FETCH_FAILURE',

    /*Modify Current User state*/
    USER_MODIFY_STATE : 'USER_MODIFY_STATE',

    USER_NAME_AVAILABLE_FETCH : 'USER_NAME_AVAILABLE_FETCH',
    USER_NAME_AVAILABLE_SUCCESS : 'USER_NAME_AVAILABLE_SUCCESS',
    USER_NAME_AVAILABLE_FAILURE : 'USER_NAME_AVAILABLE_FAILURE',

    USER_ALLOWED_POST_FETCH  : 'USER_ALLOWED_POST_FETCH',
    USER_ALLOWED_POST_SUCCESS : 'USER_ALLOWED_POST_SUCCESS',
    USER_ALLOWED_POST_FAILURE : 'USER_ALLOWED_POST_FAILURE'
}

export const STPDPOSTACTION = {
    /* Community action types */
    COMMUNITYFETCH : 'STPDPOST_FETCHING',
    COMMUNITYLATEST : 'STPDPOST_GET_LATEST',
    COMMUNITYALL : 'STPDPOST_GET_ALL',
    COMMUNITYBYHASH : 'STPDPOST_GET_HASH',
    COMMUNITY_FETCH_ERROR : 'STPDPOST_FETCH_ERROR',

    /*User actions types*/
    CREATEPOST : 'STPDPOST_CREATE',
    CREATEPOST_SUCCESS : 'STPDPOST_CREATE_SUCCESS',
    CREATEPOST_FAILURE : 'STPDPOST_CREATE_FAILURE',

    /*User related */
    USERLATEST : 'STPDPOST_GET_USER_LATEST',

    USER_OWNED_FETCH : 'STPDPOST_USER_OWNED_FETCH',
    USER_OWNED_SUCCESS : 'STPDPOST_USER_OWNED_SUCCESS',
    USER_OWNED_FAILURE : 'STPDPOST_USER_OWNED_FAILURE',

    /*Add to Post certian post*/
    MODIFY_POST_SUCCESS : 'STPDPOST_MODIFY_POST_SUCCESS',
    MODIFY_POST_FAILURE : 'STUPID_MODIFY_POST_FAILURE'

    
};

export const STPDRESPONSEACTION = {
    CREATE_RESPONSE : 'STPDRESPONSE_CREATE',
    CREATE_RESPONSE_SUCCESS : 'STPDRESPONSE_CREATE_SUCCESS',
    CREATE_RESPONSE_FAIL : 'STPDRESPONSE_CREATE_FAIL',
    GET_RESPONSES_FETCH : 'STPDRESPONSE_GET_FETCH',
    GET_RESPONSES_SUCCESS : 'STPDRESPONSES_GET_SUCCESS',
    GET_RESPONSES_FAILURE : 'STPDRESPONSES_GET_FAILURE'
};

export const STPDVOTEACTION = {
    RESPONSE_VOTE : 'STPDRESPONSE_VOTE',
    RESPONSE_VOTE_SUCCESS : 'STPDRESPONSE_VOTE_SUCCESS',
    RESPONSE_VOTE_FAIL : 'STPDRESPONSE_VOTE_FAIL'
}
