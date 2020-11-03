import Usuarios from '../Usuarios/usuarios'
import { connect } from 'react-redux'
import { fetchUsuarios } from '../Redux/index'

const mapStateToProps = (store) => {
  return {
    isFetching: store.isFetching,
    usuarios: store.usuarios,
    error: store.error
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsuarios: () => dispatch(fetchUsuarios)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)
