import * as React from 'react';
import { Dispatch } from "redux";

import logo from './logo.svg';
import './App.css';
import Hoge from './Hoge'
import Fuga from './Fuga'

import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import history from 'history/browser';
// actions
import { increment } from './action'

import MediaQuery from 'react-responsive'

export const historyWindow = window

function App(props:any) {
  console.log(props)
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
        <Router>
          <Switch>
            <Route exact path="/">
              <Hoge />
            </Route>
            <Route path="/fuga" component={Fuga} />
          </Switch>
        </Router>
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