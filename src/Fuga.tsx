import * as React from 'react'
import {
  Link,
  useNavigate,
  Outlet
} from 'react-router-dom';
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
          ()=>{navigate('/')}
        }
      >
        useNavigate
      </button>
      <Outlet />
    </div>
  )
}

export default Fuga