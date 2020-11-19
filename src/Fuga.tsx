import * as React from 'react'
import {
  Link,
  useNavigate,
  Outlet
} from 'react-router-dom';
import { push } from 'connected-react-router'
import history from 'history/browser';

import { historyWindow } from './App'

// store
import { store } from './index'


const Fuga = () => {
  const navigate = useNavigate();
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
            <Link to="piyo">fugapiyo</Link>
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
            history.push('fuga/piyo')
          }
        }
      >
        history.pushaaa0000
      </button>
      <Outlet />
    </div>
  )
}

export default Fuga