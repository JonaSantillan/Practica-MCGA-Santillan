import React from 'react';
import Formulario from './Formulario/index'
import Sidebar from './Sidebar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import Usuarios from './Usuarios/usuarios';


class App extends React.Component {
 
  render(){
    return (
      <Router>
          <Switch>
          <Route
              path="/home" 
              component={Sidebar}
            />
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/formulario">
              <Formulario />
            </Route>
            <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}

export default App