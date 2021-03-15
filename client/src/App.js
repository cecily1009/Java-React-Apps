import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import Counter from './Components/Counter/Counter';
import NavbarMenu from './Components/Layouts/NavbarMenu';
import Todo from './Components/TodoApp/Todo';
import Landing from './Components/Layouts/Landing';
import './App.css';
function App() {
  return (
    <Router>
      <Fragment>
        
        <NavbarMenu />
        
        <Switch>
          <Route exact path = '/' component = {Landing}></Route>
          <Route exact path = '/counter' component ={Counter}></Route>   
          <Route exact path = '/todoapp' component ={Todo}></Route>      
        </Switch>
      </Fragment>
      
    </Router>

    
    
  );
}

export default App;
