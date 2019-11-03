import React from 'react';
import AppBar from './nav/app-bar';
import Home from './home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <AppBar></AppBar>
      <Home></Home>
    </div>
  );
}

export default App;
