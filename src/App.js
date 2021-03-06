import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import StatusBar from './components/StatusBar';
import Results from './components/Results';
import { AuthRoute } from './components/utilRoutes';
import { setUser } from './store/state';
import LogoutUser from './components/LogoutUser';
import SavedStories from './components/SavedStories';

import ApolloHome from './components/ApolloHome';


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
        <Route path='/logout' component={LogoutUser} />
        <Route exact path='/' component={ApolloHome} />
        <Route path='/savedStories' component={SavedStories} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
