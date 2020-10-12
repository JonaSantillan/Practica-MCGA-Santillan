import Contador from './contador'
import { connect } from 'react-redux'
import { eliminar, restar, sumar } from '../Redux/index'

const mapDispatchToProps = (dispatch) => {
  return {
    sumar: (index) => dispatch(sumar(index)),
    restar: (index) => dispatch(restar(index)),
    eliminar: (index) => dispatch(eliminar(index))
  }
}

export default connect(undefined, mapDispatchToProps)(Contador)