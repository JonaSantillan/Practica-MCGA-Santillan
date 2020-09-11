import React from 'react'
import Css from './vista.module.css'


class Contador extends React.Component {

    render = () => {
        return(
            <div className={Css.cont_contador}>
                <button className={Css.botonmasmenos} onClick={(props) => {
                    this.props.sumar(this.props.index)
                }}>+</button>
                <div className={Css.numero}>{this.props.numero}</div>
                <button className={Css.botonmasmenos} onClick={(props) => {
                    this.props.restar(this.props.index)
                }}>-</button>
                <button className={Css.botoneliminar} onClick={(props) => {
                    this.props.eliminar(this.props.index)
                }}>Eliminar</button>
            </div>
        )
    }   
}

export default Contador
