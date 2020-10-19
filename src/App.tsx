import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Hoge from './Hoge'
import Fuga from './Fuga'
import FugaIndex from './FugaIndex'
import FugaFuga from './FugaFuga'
import User from './User'

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Router } from "@reach/router"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Router>
          <Hoge path="/" />
          <Fuga path="fuga">
            <FugaIndex path="/" />
            <FugaFuga path="/piyo" />
            <User path="/:id" id="" />
          </Fuga>
        </Router>
      </header>
    </div>
  );
}

export default App;
