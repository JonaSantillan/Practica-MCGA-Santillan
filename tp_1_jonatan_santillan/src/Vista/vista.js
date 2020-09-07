import React from 'react'
import Css from './vista.module.css'

class Vista extends React.Component {

    state = {
        numero : 0,
        lista_contadores : []
      }

    render = () => {
        return(
            <div className={Css.cont_contadores}>
                <div className={Css.texto3}>Lista de Contadores</div>
                <div className={Css.cont_contador}>
                    <button className={Css.botonmasmenos} onClick={() => {
                        if(this.state.numero >= 0){
                            this.state.numero = this.state.numero + 1
                            this.setState({
                                numero : this.state.numero
                            })
                        }
                    }}>+</button>
                    <div className={Css.numero}>{this.state.numero}</div>
                    <button className={Css.botonmasmenos} onClick={() => {
                        if(this.state.numero >= 0){
                            this.state.numero = this.state.numero - 1
                            this.setState({
                                numero : this.state.numero
                            })
                        }
                    }}>-</button>
                    <button className={Css.botoneliminar}>Eliminar</button>
                </div>
            </div>

        )
    }
}

export default Vista