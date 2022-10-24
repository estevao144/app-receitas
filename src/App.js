import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
