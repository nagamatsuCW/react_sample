import * as React from 'react'
import {
  Link,
} from 'react-router-dom';

import MediaContext from './MediaContext'

const HogeHoge = () => {
  const value = React.useContext(MediaContext);
  return(
    <div>
      HogeHoge{value}
      <Link to="/fuga">fuga</Link>
    </div>
  )
}



export default HogeHoge