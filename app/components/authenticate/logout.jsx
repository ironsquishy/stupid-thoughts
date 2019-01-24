import React from  'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../actions/userActions';


const Logout = (props) =>{
    console.log('Logout component:', props);
    props.logout();
    return (<Redirect to="/login" />);
};

function mapToState(state){
    return {...state};
}
export default connect(mapToState, { logout })(Logout);