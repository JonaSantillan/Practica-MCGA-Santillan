import React from 'react';
import Css from './app.module.css';
import Contador from './Contador/contador';
import Sidebar from './Sidebar/sidebar';


class App extends React.Component {

  state = {
    numero : 0,
    data : [],
    fecha : new Date().toLocaleString(),
    fechaactual : new Date().toLocaleString(),
  }

  agregar_cont = () => {
      let data = this.state.data
      let newdata = [...data, 0]

      this.setState({
        data : newdata,
        fecha : new Date().toLocaleString(),
        fechaactual : new Date().toLocaleString(),
      })
  }

  editar_info = () => {
    document.getElementById("info-btn").innerHTML="Guardar Información"

    

  }

  eliminar_cont = (index) => {
    const newlista = this.state.data.filter((item, i) => {
      if(index !== i){
        return true
      }
      return false
    })

    this.setState({
      data : newlista
    })
  }

  sumar = (index) => {
    const newlista = this.state.data.map((item, i) =>{
      if(index === i){
        return item + 1
      }
      return item
    })
    this.setState({
      data : newlista,
      fechaactual : new Date().toLocaleString()
    })
  }

  restar = (index) => {
    const newlista = this.state.data.map((item, i) =>{
      if(index === i){
        return item - 1
      }
      return item
    })
    this.setState({
      data : newlista,
      fechaactual : new Date().toLocaleString()
    })
  }
  

  render (){
    return(
      <div className={Css.app}>
        <header className={Css.header}>
          Trabajo Práctico N°2
        </header>
        <div className={Css.contenedor}>
          <Sidebar 
            agregar_cont={this.agregar_cont}
          />          
          <div className={Css.cont_contadores}>
            <div className={Css.texto3}>Lista de Contadores</div>
              {this.state.data.map ((item, index) =>{
                return(
                  <Contador 
                    key = {index}
                    index = {index}
                    numero = {item}
                    fecha = {this.state.fecha}
                    fechaactual = {this.state.fechaactual}
                    eliminar = {this.eliminar_cont}
                    sumar = {this.sumar}
                    restar = {this.restar}
                  />
                )
              })}
          </div>
          
        </div>
      </div>
    )
  }
} 


export default App;
