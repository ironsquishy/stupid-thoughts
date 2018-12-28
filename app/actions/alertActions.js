import { ALERTACTIONS } from '../utils';

export function success(message){
    return { type : ALERTACTIONS.SUCCESS, message };
}

export function error(message){
    return { type: ALERTACTIONS.ERROR, message };
}

export function clear(){
    return { type : ALERTACTIONS.CLEAR };
}

