import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';

import Login from '../Login/Login';
import Home from '../Home/Home';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from '../Register/Register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
