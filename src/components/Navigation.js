import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory, Route, Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import { withTheme } from '@material-ui/core';
import Swipable from './SwipableDrawer_M';
import SwipableMenu from './SwipableDrawer_Menu_M'
import { makeStyles } from '@material-ui/core/styles';

import { setDrawerer } from '../store/state';
import { setUser } from '../store/state';
import { handleErrors } from "./utils";
import { API } from '../config';


const useStyles = makeStyles((theme) => ({
  demoBtn: {
    color: '#000000'
  },
  demoBtn: {
    '&:hover': {
      color: 'gray',
      fontWeight: 700
    }
  }
}));


const Navigation = () => {
  const currCountry = useSelector((state) => state.currCountry);
  const drawererIsOpen = useSelector((state) => state.drawererIsOpen)
  const user = useSelector((state) => state.user);
  const classes = useStyles();

  let dispatch = useDispatch();

  let history = useHistory();

  const homeClick = () => history.push('/');

  const menuClick = () => dispatch(setDrawerer(!drawererIsOpen));

  const demoLogin = async () => {
    try {
      const res = await fetch(`${API}users/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: 'demo@gmail.com',
          password: 'demo'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) {
        throw res;
      }
      const { token, user: { id } } = await res.json();
      // store access_token in localStorage:
      localStorage.setItem('worldViewjtid_ACCESS_TOKEN', token);
      localStorage.setItem('worldViewjtid_CURRENT_USER_ID', id);
      dispatch(setUser(id));
      return <Route render={(props) => <Redirect to='/' />} />
    } catch (e) {
      console.log(e);
      handleErrors(e);
    }
  }


  return (
    <div className='nav-container'>
      <span className='nav-container__left'>
        {/* <div className="nav-container__icon-button">
            <i className="fa fa-bars"></i>
          </div>
          <div className="nav-container__icon-button">
            <i className="fa fa-search"></i>
          </div> */}
        {/* <MenuIcon onClick={menuClick} style={{ fontSize: 30 }}/> */}
        {user ? <a className='nav-container__right--loggedOut' href='/logout'>Logout</a>
          : <>
            <a className='nav-container__right--loggedOut' href='/login'>Login</a>
            <a className='nav-container__right--loggedOut' href='/Signup'>Join</a>
          </>}
        <Swipable />
        {/* <NavCrumbs style={{fontSize: 30, color: "white", marginLeft: "20px"}}/> */}
      </span>
      <span className='nav-container__center'>
        <div className='nav-container__h1'>World View</div>
        {/* <div className='logo-container'><img className='logo' src={logo} /></div> */}
        {/* <span className='nav-container__center__country'>{`Current Country: ${currCountry.toUpperCase()}`}</span> */}
      </span>
      <span className='nav-container__right'>
        {/* {!user ? <Button className={classes.demoBtn} onClick={demoLogin}>Demo</Button> : null} */}
        <HomeIcon onClick={homeClick} style={{ fontSize: 30, marginLeft: '10px', cursor: 'pointer' }} />
        <SwipableMenu style={{ marginLeft: '30px' }} />

      </span>
    </div>
  )
}

export default Navigation;
