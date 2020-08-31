import React from 'react';
import User from './user/user'
import Loading from './Loading/loading'
import css from './app.module.css';

class App extends React.Component {

  state = {
    users: [],
    cargando: false,
  }

  componentWillMount = async () =>{
    try{
      this.setState ({cargando: true})
      const response = await fetch ("https://jsonplaceholder.typicode.com/users")
      const lista = await response.json();
      this.setState({
        users: lista,
        cargando: false
      })
    }catch(error){
      this.setState ({cargando: false})
      console.error(error)
    }
  }

  removeUser = (userId) => {
    const nuevaLista = this.state.users.filter((users) => {
      if(users.id !== userId){
        return true
      }
      return false
    })
    this.setState({
      users: nuevaLista
    })
  }

  render(){
    return (
      <div className={css.App}>
        <header className={css.header}>
            Lista de Usuarios
        </header>
        <section className={css.listaUsuarios}>
          {this.state.cargando
          ? <Loading />
          : this.state.users.map((users, index) => {
            return (
            <User 
              key={index} 
              name={users.name}
              username={users.username}
              phone={users.phone}
              email={users.email}
              removeUser={this.removeUser}
              id={users.id}
            />
            )
          })}
        </section>
      </div>
    );
  }
}

export default App;
