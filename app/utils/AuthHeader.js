export default function AuthHeader(){
    var token = JSON.parse(sessionStorage.getItem('stupidToken'));

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