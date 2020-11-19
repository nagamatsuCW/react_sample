import * as React from 'react'
import {
  Link,
} from 'react-router-dom';

import HogeHoge from './HogeHoge'

const Hoge = () => (
  <div>
    Hogeeeee
    <HogeHoge />
    <Link to="/fuga">fuga</Link>
  </div>
)

export default Hoge