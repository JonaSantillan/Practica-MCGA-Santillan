import React from  "react"
import Css from "./sidebar.module.css"
import {
    Link
  } from "react-router-dom";
  import Formulario from '../formulario/index';
import Sidebar from '../Sidebar/index'

class sidebar extends React.Component {

    state = {
        nombre : "Jonatan Santillan",
        año : 2020,
        editar : false
    }

    estado_editor = () => {
        this.setState({
            editar : !this.state.editar
        })
        console.log(this.state.editar)
    }

    cambioinput_nombre = (evt) => {
        this.setState({
            nombre : evt.target.value
        })
    }

    cambioinput_año = (evt) => {
        this.setState({
            año : evt.target.value
        })
    }


    render = () => {
        return(                
            <div className={Css.cont_boton}>
                <div className={Css.texto}>Alumno</div>
                {this.state.editar
                    ?
                    (
                        <React.Fragment>
                            <input
                                type="text"
                                name="nombre"
                                value={this.state.nombre}
                                className={Css.input}
                                onChange={this.cambioinput_nombre}
                            />
                            <input
                                type="number"
                                name="año"
                                value={this.state.año}
                                className={Css.input}
                                onChange={this.cambioinput_año}
                            />
                        </React.Fragment>
                    )
                    :
                    (
                        <React.Fragment>
                            <div id="cambio-nombre" className={Css.texto2}>{this.state.nombre}</div>
                            <div id="cambio-age" className={Css.texto2}>{this.state.año}</div>
                        </React.Fragment>
                    )
                }
    
                <button 
                    className={Css.boton2} 
                    onClick={this.estado_editor}
                >
                    {this.state.editar ? "Guardar Información" : "Editar Información"}
                </button>
                <Link to="/usuarios">
                    <button 
                        className={Css.boton} 
                    >
                    Lista de Usuarios
                    </button>
                </Link>  
                <Link to="/formulario">
                    <button 
                        className={Css.boton} 
                    >
                    Agregar Usuario
                    </button>
                </Link>                 
            </div>
            
        )
    }
}

export default sidebar