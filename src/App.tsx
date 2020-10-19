import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Hoge from './Hoge'
import Fuga from './Fuga'
import FugaIndex from './FugaIndex'
import FugaFuga from './FugaFuga'
import User from './User'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hoge />} />
            <Route path="fuga" element={<Fuga />}>
              <Route path="/" element={<FugaIndex />} />
              <Route path="/piyo" element={<FugaFuga />} />
              <Route path="/:id" element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
