import React from 'react';
import Css from './app.module.css';
import Contador from './Contador/contador' 


class App extends React.Component {

  state = {
    numero : 0,
    data : [],
    fecha : Date(),
    fechaactual : Date()
  }

  agregar_cont = () => {
      let data = this.state.data
      let newfecha = this.state.fecha
      let newdata = [...data, 0]

      this.setState({
          data : newdata,
          fecha : newfecha
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
      fechaactual : Date()
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
      fechaactual : Date()
    })
  }
  

  render (){
    return(
      <div className={Css.app}>
        <header className={Css.header}>
          Trabajo Práctico N°2
        </header>
        <div className={Css.contenedor}>
                
          <div className={Css.cont_boton}>
              <div className={Css.texto}>Alumno</div>
              <div id="cambio-nombre" className={Css.texto2}>Jonatan Santillan</div>
              <div id="cambio-age" className={Css.texto2}>2020</div>
              <button id="info-btn" className={Css.boton2} onClick={this.editar_info}>Editar Información</button>
              <button className={Css.boton} onClick={this.agregar_cont}>Agregar Contador</button>
          </div>
          
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
