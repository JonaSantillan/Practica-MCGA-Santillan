import React from 'react'
import css from './formulario.module.css'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom';

class Formulario extends React.Component {
       
    render = () => {
        return (
            <div className={css.app}>
            <div className={css.container}>
              <section className={css.addSection}>  
                <div className={css.informationSection}>
                    <span className={css.titleAlumno}>Nuevo Usuario:</span>            
                    <Field name="name" className={css.input} component="input" type="text" />
                    <Field name="email" className={css.input} component="input" type="text" />
                    <button id="saveButton" className={css.buttonSave} onClick={this.saveNewUser}>Guardar Información</button>
                </div>
              </section>
              <Link to='/'>
                <div className={css.button}> Ir a Inicio</div>
              </Link>
              <Link to='/usuarios'>
                <div className={css.button}> Ir a Lista de Usuarios</div>
              </Link>
            </div>
          </div>
        )
    }

    saveNewUser = () => {
        this.props.handleSubmit();
        this.props.history.push('/');
    }
}
export default Formulario