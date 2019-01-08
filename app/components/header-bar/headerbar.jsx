import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';

const HeaderBar = (props) => {
    const {auth} = props;

    return (
        <AppBar title="Crypto">
             <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Sign up</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </AppBar>
    )
};

export default HeaderBar;