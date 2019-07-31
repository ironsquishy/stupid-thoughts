export default function AuthHeader(){
	let token = JSON.parse(sessionStorage.getItem('stupidToken'));

	if(token){
		return {
			'Content-Type' : 'application/json', 
			'Authorization' : 'Bearer ' + token
		};
	} else {
		return {
			'Content-Type' : 'application/json'
		};
	}
}