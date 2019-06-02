import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'


import Routes from './routes'

function App() {

  return (
    <div className="App">

      <Navbar className="Navigation">
        <Navbar.Brand href="#home">User Management</Navbar.Brand>
      </Navbar>

      <Routes />
    </div>
  );
}

export default App;
