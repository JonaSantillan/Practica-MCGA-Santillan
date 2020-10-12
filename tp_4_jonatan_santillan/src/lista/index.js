import Lista from './lista'
import { connect } from 'react-redux';

const mapStateToProps = (store) => {
  return {
    contadores: store.contadores,
  }
}

export default connect(mapStateToProps)(Lista)