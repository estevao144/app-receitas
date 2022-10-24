import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Meals from './pages/Meals';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Meals } />
      </Switch>
    </div>
  );
}

export default App;
