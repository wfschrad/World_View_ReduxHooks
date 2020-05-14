import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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

const App = () => (
  <BrowserRouter>
    <Navigation />
    <StatusBar/>
    <Switch>
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/showAll' component={Results}/>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
