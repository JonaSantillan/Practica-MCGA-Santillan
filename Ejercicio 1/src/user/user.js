import React from 'react'
import css from './user.module.css'

const User = (props) => {
    return(
        <div className={css.contenedor}>
            <h1 className={css.name}>
                {props.name}
            </h1>
            <div className={css.info}>
                <div className={css.item}>
                    <span className={css.key}>Nombre: </span>
                    <span className={css.valor}>{props.username}</span>
                </div>
                <div className={css.item}>
                    <span className={css.key}>Teléfono: </span>
                    <span className={css.valor}>{props.phone}</span>
                </div>
                <div className={css.item}>
                    <span className={css.key}>e-mail: </span>
                    <span className={css.valor}>{props.email}</span>
                </div>
            </div>
            <button className={css.boton} onClick={() => {
                props.removeUser(props.id)
            }}>
                Eliminar Usuario
            </button>
        </div>
    )
}

export default User