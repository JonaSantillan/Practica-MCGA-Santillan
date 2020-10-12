import Sidebar from './sidebar'
import { connect } from 'react-redux'
import { agregar_cont } from '../Redux/index'

const mapDispatchToProps = (dispatch) => {
  return {
    agregar_cont: () => dispatch(agregar_cont())
  }
}

export default connect(undefined, mapDispatchToProps)(Sidebar)