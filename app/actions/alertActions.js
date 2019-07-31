import Utils from '../utils';

export function success(message){
	return { type : Utils.ALERTACTIONS.SUCCESS, message };
}

export function error(message){
	return { type: Utils.ALERTACTIONS.ERROR, message };
}

export function clear(){
	return { type : Utils.ALERTACTIONS.CLEAR };
}

