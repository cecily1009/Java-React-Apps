import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import Counter from './Components/Counter/Counter';
import NavbarMenu from './Components/Layouts/NavbarMenu';
import './App.css';
function App() {
  return (
    <Router>
      <Fragment>
        <NavbarMenu />
        <Switch>
          <Route exact path = '/counter' component ={Counter}></Route>        
        </Switch>
      </Fragment>
      
    </Router>

    
    
  );
}

export default App;
