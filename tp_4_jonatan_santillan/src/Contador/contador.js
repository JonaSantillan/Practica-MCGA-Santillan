import React from 'react'
import Css from './contador.module.css'

const Contador = (props) => {
    return (
                <div className={Css.cont_contador}>
                    <div>
                        <div className={Css.datos}>Creado: {props.item.fecha}</div>
                        <div className={Css.datos}>Actualizado: {props.item.fechaactual}</div>
                    </div>
                    <div className={Css.cont_contador2}>
                        <button className={Css.botonmasmenos} onClick={() => {
                            props.sumar(props.index)
                        }}>+</button>
                        <div className={Css.numero}>{props.item.valor}</div>
                        <button className={Css.botonmasmenos} onClick={() => {
                            props.restar(props.index)
                        }}>-</button>
                        <button className={Css.botoneliminar} onClick={() => {
                            props.eliminar(props.index)
                        }}>Eliminar</button>
                    </div>
                </div>
        )
    }   

export default Contador
