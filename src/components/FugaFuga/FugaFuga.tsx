import * as React from 'react'
import { Props } from './index'

const FugaFuga:React.FC<Props> = (props) => {
  return(
    <div id="test">
      FugaaaPiyoooooo
      <div id="count">
        {props.count}
      </div>
      <button id="incrementButton" onClick={props.increment}>increment</button>
    </div>
  )
}

export default FugaFuga