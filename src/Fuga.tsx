import * as React from 'react'


import { Router, RouteComponentProps, Link, useNavigate } from "@reach/router"

interface Props {
  children: React.ReactNode
}

const Fuga = (props: Props & RouteComponentProps) => {
  const navigate = useNavigate()
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
      {props.children}
    </div>
  )
}

export default Fuga