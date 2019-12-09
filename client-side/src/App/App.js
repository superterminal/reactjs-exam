import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';

import Login from '../Login/Login';
import Home from '../Home/Home';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from '../Register/Register';

import withAuth from '../shared/withAuth/withAuth';
import Details from '../shared/SearchBar/Recipe/Details/Details';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register} />
        <Route path='/recipe/:uri_id' component={withAuth(Details)} />
        {/* <Route path='/test' component={withAuth(Login)} /> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
