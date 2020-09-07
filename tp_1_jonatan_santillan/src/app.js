import React from 'react';
import Css from './app.module.css';
import Vista from './Vista/vista'

class App extends React.Component {
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
              <button className={Css.boton}>Agregar Contador</button>
          </div>
          
          <Vista />
          
        </div>
      </div>
    )
  }
} 


export default App;
