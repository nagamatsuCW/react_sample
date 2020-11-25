import * as React from 'react';
import { Dispatch } from "redux";

import logo from './logo.svg';
import './App.css';
import Hoge from './Hoge'
import Fuga from './Fuga'

import { connect } from 'react-redux'

import {
  Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
// actions
import { increment } from './action'

import MediaQuery from 'react-responsive'
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store'


function App(props:any) {
  console.log(props)
  return (
    <ConnectedRouter history={history}>
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
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <Hoge />
              </Route>
              <Route path="/fuga" component={Fuga} />
            </Switch>
          </Router>
        </header>
      </div>
    </ConnectedRouter>
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