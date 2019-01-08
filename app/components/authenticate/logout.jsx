import React from  'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Logout = (props) =>{
    console.log('Logout component:', props);
    return (<Redirect to="/login" />);
};

function mapToState(state){
    return {...state};
}
export default connect(mapToState)(Logout);