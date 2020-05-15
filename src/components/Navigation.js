import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import NavCrumbs from './NavBreadCrumbs_M';
import { withTheme } from '@material-ui/core';
import Swipable from './SwipableDrawer_M';

import { setDrawerer } from '../store/state';


const Navigation = () => {
  const currCountry = useSelector((state) => state.currCountry);
  const drawererIsOpen = useSelector((state) => state.drawererIsOpen)
  let dispatch = useDispatch();

  let history = useHistory();

  const homeClick = () => history.push('/');

  const menuClick = () => dispatch(setDrawerer(!drawererIsOpen));

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
        <Swipable />
        <a className='nav-container__right--loggedOut' href='/login'>Login</a>
        <a className='nav-container__right--loggedOut' href='/login'>Join</a>
        {/* <NavCrumbs style={{fontSize: 30, color: "white", marginLeft: "20px"}}/> */}
      </span>
      <span className='nav-container__center'>
        {/* <h1 className='nav-container__h1'>World View</h1> */}
        <div className='logo-container'><img className='logo' src='../assets/images/wvLogo.png' /></div>
        <span className='nav-container__center__country'>{`Current Country: ${currCountry.toUpperCase()}`}</span>
      </span>
      <span className='nav-container__right'>
        <HomeIcon onClick={homeClick} style={{ fontSize: 30 }} />

      </span>
    </div>
  )
}

export default Navigation;
