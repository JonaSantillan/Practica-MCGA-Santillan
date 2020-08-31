import React from 'react'
import css from './user.module.css'

class User extends React.Component {

    state = {
      open: false,
    }
  
    showInfo = () => {
      this.setState({
        open: !this.state.open,
      })
    }

 render = () => {
    return (
        <div className={css.contenedor}>
            <h1 className={css.name}>
                {this.props.name}
            </h1>
            <button className={css.button} onClick={this.showInfo}>Más Info +</button>
            {this.state.open
                && (
                <div className={css.info}>
                    <div className={css.item}>
                        <span className={css.key}>Nombre: </span>
                        <span className={css.valor}>{this.props.username}</span>
                    </div>
                    <div className={css.item}>
                        <span className={css.key}>Teléfono: </span>
                        <span className={css.valor}>{this.props.phone}</span>
                    </div>
                    <div className={css.item}>
                        <span className={css.key}>e-mail: </span>
                        <span className={css.valor}>{this.props.email}</span>
                    </div>
                </div>)}
            <button className={css.boton} onClick={() => {
                this.props.removeUser(this.props.id)
            }}>
                Eliminar Usuario
            </button>
        </div>
        )
    }
}

export default User