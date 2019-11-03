import React from 'react';
import AppBar from './nav/app-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        />
      <AppBar></AppBar>
    </div>
  );
}

export default App;
