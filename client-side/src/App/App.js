import React, { useState } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Logout from '../Logout/Logout';

import Home from '../Home/Home';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import withAuth from '../shared/withAuth/withAuth';
import Details from '../shared/SearchBar/Recipe/Details/Details';
import ProductDetails from '../shared/SearchBar/Recipe/ProductDetails/ProductDetails';

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

function App() {
  let cookie = parseCookies();
  const [loggedIn, setLoggedIn] = useState(!!Object.keys(cookie)[0]);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar {...{ loggedIn }}/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/login' render={(props) => <Login {...{ setLoggedIn, ...props }} /> } />
        <Route path='/register' component={Register} />
        <Route path='/logout' render={(props) => <Logout {...{ setLoggedIn, ...props }} /> } />
        <Route path='/recipe/:uri_id' component={withAuth(Details)} />
        <Route path='/product/:product_id' component={withAuth(ProductDetails)}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
