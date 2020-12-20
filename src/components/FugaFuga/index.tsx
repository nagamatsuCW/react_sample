import { connect } from "react-redux";
import { increment, nameChange } from '../../action'
import { StoreState } from '../../reducer'
import { Dispatch } from 'redux'
import FugaFuga from './FugaFuga'


function mapStateToProps(state:StoreState) {
  return {
      count: state.counter.count,
      name: state.counter.name
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increment: () => { dispatch(increment()) },
    nameChange: (value: string) => { dispatch(nameChange(value)) }
  }
}

// type Props = ownProps & RetuZrnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
export type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FugaFuga);
