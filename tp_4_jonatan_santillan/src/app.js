import React from 'react';
import Css from './app.module.css';
import Lista from './lista/index'
import Sidebar from './Sidebar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


class App extends React.Component {
 
  render(){
    return (
      <Router>
          <Switch>
          <Route
              path="/home" 
              component={Sidebar}
            />
            <Route path="/contadores">
              <Lista />
            </Route>
            <Redirect to="/home" />
          </Switch>
      </Router>
    );
  }
}

export default App