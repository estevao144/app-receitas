import React from 'react';
import './App.css';

import Header from './components/Header';
import Provider from './context/Provider';

import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './components/Login';
import Meals from './pages/Meals';

function App() {
  return (
    <Provider>
      <Header />  
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
      </Switch>
    </Provider>
  );
}

export default App;
