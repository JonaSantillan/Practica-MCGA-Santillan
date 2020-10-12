import React from 'react'
import Contador from '../Contador/index'
import { Link } from "react-router-dom";
import css from './lista.module.css'

class Lista extends React.Component {
  render = () => {
    return (
      <div className={css.container}>
        <Link to="/home">
          Volver a Inicio
        </Link>
        <h1>Lista de contadores</h1>
        <div className={css.list}>
          {
            this.props.contadores.map((item, index) => {
              return (<Contador
                  key={index}
                  index={index}
                  item={item}
                />)
            })
          }
        </div>
      </div>
    )
  }
}

export default Lista