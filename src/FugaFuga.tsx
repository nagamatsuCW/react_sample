import * as React from 'react'
import { connect } from "react-redux";
import { increment } from './action'
import { StoreState } from './reducer'
import { Dispatch } from 'redux'

const FugaFuga:React.FC<Props> = (props) => {
  return(
    <div id="test">
      FugaaaPiyoooooo{props.count}
      <button onClick={props.increment}>increment</button>
    </div>
  )
}

function mapStateToProps(state:StoreState) {
  return {
      count: state.counter.count
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increment: () => { dispatch(increment()) }
  }
}

// type Props = ownProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FugaFuga);
