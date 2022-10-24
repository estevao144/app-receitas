import React from 'react';
import './App.css';
import Header from './components/Header';
import Drinks from './pages/Drinks';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Header />
      <Drinks />
    </Provider>
  );
}

export default App;
