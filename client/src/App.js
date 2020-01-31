import React from 'react';
import {BrowserRouter, HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'
import './styles/index.scss'

const App = (props) => {
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
