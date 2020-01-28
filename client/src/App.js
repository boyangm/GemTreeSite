import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import './styles/index.scss'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Switch>
        <Route exact path = '/' render ={()=><Redirect to ='/home' />}/>
        <Route exact path = '/home' component = {Home}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
