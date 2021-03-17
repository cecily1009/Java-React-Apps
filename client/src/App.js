import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import Counter from './Components/Counter/Counter';
import NavbarMenu from './Components/Layouts/NavbarMenu';
import TodoLogin from './Components/TodoApp/TodoLogin';
import TodoWelcome from './Components/TodoApp/TodoHome';
import TodoList from './Components/TodoApp/ListTodos';
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
          <Route exact path = '/todoapp/login' component={TodoLogin}></Route>
          <Route exact path = '/todoapp/welcome/:name' component={TodoWelcome}></Route>
          <Route exact path = '/todoapp/:name/listtodo' component={TodoList}></Route>

        </Switch>
      </Fragment>
      
    </Router>

    
    
  );
}

export default App;
