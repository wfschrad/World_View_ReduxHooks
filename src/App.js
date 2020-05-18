import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ImgCard from './components/ImgCard_M';
import ImgCardHorizontal from './components/ImgCardHorizontal_M';
import Modal from './components/Modal_M';
import SearchForm from './components/SearchForm';
import Home from './components/Home';
import StatusBar from './components/StatusBar';
import Results from './components/Results';
import Swipable from './components/SwipableDrawer_M';
import { AuthRoute, ProtectedRoute } from './components/utilRoutes';
import { setUser } from './store/state';
import Logout from './components/Logout';
import SavedStories from './components/SavedStories';


const App = () => {
  const currentUserId = localStorage.getItem('worldViewjtid_CURRENT_USER_ID');
  const dispatch = useDispatch();
  dispatch(setUser(currentUserId));

  return (
    <BrowserRouter>
      <Navigation />
      <StatusBar />
      <Switch>
        <AuthRoute path='/login' component={LoginForm} currentUserId={currentUserId} />
        <AuthRoute path='/signup' component={SignupForm} currentUserId={currentUserId} />
        <Route path='/showAll' component={Results} />
        <Route path='/logout' component={Logout} />
        <Route exact path='/' component={Home} />
        <Route path='/savedStories' component={SavedStories} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
