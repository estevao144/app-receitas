import React from 'react';
import './App.css';

import Header from './components/Header';
import Provider from './context/Provider';

import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './components/Login';

function App() {
  return (
    <Provider>
      <Header />  
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
