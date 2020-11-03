import React from 'react'
import Css from './usuarios.module.css'
import { Link } from "react-router-dom";

class Usuarios extends React.Component {
    render = () => {
        return (
            <div className={Css.container}>
              <Link to="/home">
                Volver a Pantalla Principal
              </Link>
              <h1>Lista de Usuarios</h1>
              <div className={Css.list}>
                Acá tiene que venir el link
              </div>
              <div className={Css.list}>
                Acá tiene que agregar los datos del formulario
              </div>
            </div>
            )
        }   
    }
export default Usuarios

/*
<div>{this.props.isFetching && <div>Cargando</div>}</div>
                    <div>
                        { 
                            this.props.Usuarios.map((usuarios) => {
                              return (
                                <div key={usuarios.id}>
                                  {usuarios.name}
                                </div>
                              )
                            })
                        }
                    </div>
                <div>
                    {this.props.error && <div>{this.props.error}</div>}
                </div>*/