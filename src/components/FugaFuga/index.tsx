import * as React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, nameChange } from '../../store/counter';


const FugaFuga:React.FC = () => {
  const name = useSelector(state => state.counter.name);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return(
    <div id="test">
      FugaaaPiyoooooo
      <div id="count">
        {count}
      </div>
      <div id="name">
        <p>名前: {name}</p>
        <div>
          <input type="text" onChange={e => dispatch(nameChange(e.target.value))}/>
        </div>
      </div>
      <button id="incrementButton" onClick={() => dispatch(increment())}>increment</button>
    </div>
  )
}

export default FugaFuga