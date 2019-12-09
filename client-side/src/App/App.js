import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../shared/SearchBar/SearchBar';

import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Home from '../Home/Home';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
