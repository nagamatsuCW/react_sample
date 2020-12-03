import * as React from 'react'
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { push } from 'connected-react-router'

import FugaIndex from './FugaIndex'
import FugaFuga from './FugaFuga'
import User from './User'

// store
import { store } from './index'

interface Props {
  push: typeof push
}

const Fuga:React.FC<Props> = (props) => {
  let { path, url } = useRouteMatch();
  const initialState = ""
  const [userName, setName] = React.useState(initialState)
  return(
    <div>
      Fugaaaaaa
      <nav>
        <ul>
          <li>
            <Link to="/">hoge</Link>
          </li>
          <li>
            <Link to="/fuga/piyo">fugapiyo</Link>
          </li>
          <li>
            <Link to={`/fuga/${userName}`}>User</Link>
          </li>
        </ul>
      </nav>
      <div>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      </div>
      <div>
        {userName}
      </div>
      <button
        onClick={
          ()=>{
            props.push('/fuga/piyo')
          }
        }
      >
        history.pushaaa0000
      </button>
      <Switch>
        <Route exact path={path}>
          <FugaIndex />
        </Route>
        <Route path="/fuga/piyo" component={FugaFuga} />
        <Route path="/fuga/:id" component={User} />
      </Switch>
    </div>
  )
}

export default connect(null, { push })(Fuga);