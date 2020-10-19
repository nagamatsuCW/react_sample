import * as React from 'react'

import { Router, RouteComponentProps, Link } from "@reach/router"


const Hoge = (props: RouteComponentProps) => (
  <div>
    Hogeeeee
    <Link to="/fuga">fuga</Link>
  </div>
)

export default Hoge