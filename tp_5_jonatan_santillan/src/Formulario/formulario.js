import React from 'react'
//import Usuarios from '../Usuarios/index'
import { Link } from "react-router-dom";
import css from './formulario.module.css'

class Formulario extends React.Component {
  render = () => {
    return (
      <div className={css.container}>
        <Link to="/home">
          Volver a Pantalla Principal
        </Link>
        <h1>Agregar Usuario</h1>
        <div className={css.list}>
          datos para cargar - Nombre
        </div>
        <div className={css.list}>
          datos para cargar - Telefono
        </div>
        <div className={css.list}>
          datos para cargar - Email
        </div>

        <button 
          className={css.boton} 
          >
          Cargar Datos
        </button>

      </div>
    )
  }
}

export default Formulario