import * as React from 'react';

import { Router, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import MediaQuery from 'react-responsive'
import { history } from '../../store'
import { useSelector, useDispatch } from "react-redux";

// actions
import { increment } from '../../store/counter';

// components
import logo from '../../logo.svg';
import './App.css';
import Hoge from '../Hoge'
import Fuga from '../Fuga'

function App(props:any) {
  const name = useSelector(state => state.counter.name);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
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
          <button onClick={() => dispatch(increment())}>onClick{count}</button>
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

export default App