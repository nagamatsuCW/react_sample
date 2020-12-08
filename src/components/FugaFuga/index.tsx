import { connect } from "react-redux";
import { increment } from '../../action'
import { StoreState } from '../../reducer'
import { Dispatch } from 'redux'
import FugaFuga from './FugaFuga'


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

// type Props = ownProps & RetuZrnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FugaFuga);
