import React from 'react';
import Css from './app.module.css';
import Contador from './Vista/vista' 


class App extends React.Component {

  state = {
    numero : 0,
    data : []
  }

  agregar = () => {
      let data = this.state.data
      let newdata = [...data, 0]
      this.setState({
          data : newdata
      })
  }

  eliminar = (index) => {
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
      data : newlista
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
      data : newlista
    })
  }
  

  render (){
    return(
      <div className={Css.app}>
        <header className={Css.header}>
          Trabajo Práctico N°1
        </header>
        <div className={Css.contenedor}>
                
          <div className={Css.cont_boton}>
              <div className={Css.texto}>Alumno</div>
              <div className={Css.texto2}>Jonatan Santillan</div>
              <button className={Css.boton} onClick={this.agregar}>Agregar Contador</button>
          </div>
          
          <div className={Css.cont_contadores}>
            <div className={Css.texto3}>Lista de Contadores</div>
              {this.state.data.map ((item, index) =>{
                return(
                  <Contador 
                    key = {index}
                    index = {index}
                    numero = {item}
                    eliminar = {this.eliminar}
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
