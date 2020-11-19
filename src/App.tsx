import * as React from 'react';
import { Dispatch } from "redux";

import logo from './logo.svg';
import './App.css';
import Hoge from './Hoge'
import Fuga from './Fuga'
import FugaIndex from './FugaIndex'
import FugaFuga from './FugaFuga'
import User from './User'
import { connect } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'

// actions
import { increment } from './action'

import MediaQuery from 'react-responsive'

export const history = createBrowserHistory()
function App(props:any) {
  console.log(props)
  history.push('fuga')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <MediaQuery minDeviceWidth={768}>
          <div>min</div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={767}>
          <div>max</div>
        </MediaQuery>
        <button onClick={props.onClick}>onClick{props.count}</button>
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

const mapStateToProps = (state: any) => ({
  count: state.counter.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(increment())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)