import React from 'react';
import { useHistory, Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/state';


const Logout = () => {
    window.localStorage.removeItem('worldViewjtid_CURRENT_USER_ID');
    window.localStorage.removeItem('worldViewjtid_ACCESS_TOKEN');
    const dispatch = useDispatch();
    dispatch(setUser(null));
    const history = useHistory();
    history.push('/')
    return <Route render={(props) => <Redirect to='/' />} />
}

export default Logout;