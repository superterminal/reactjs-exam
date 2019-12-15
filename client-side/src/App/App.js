import React, { useState } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Logout from '../Logout/Logout';

import Home from '../Home/Home';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import withAuth from '../shared/withAuth/withAuth';
import RecipeDetails from '../shared/SearchBar/Recipe/RecipeDetails/RecipeDetails';
import ProductDetails from '../shared/SearchBar/Recipe/ProductDetails/ProductDetails';
import AdvancedSearch from '../AdvancedSearch/AdvancedSearch';
import RandomRecipies from '../RandomRecipies/RandomRecipies';
import MealPlan from '../MealPlan/MealPlan';
import Diets from '../MealPlan/Diets/Diets';
import Videos from '../Videos/Videos';
import MyRecipies from '../MyRecipies/MyRecipies';
import PageNotExists from './PageNotExists/PageNotExists';

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
        <Route path="/home" component={Home}/>
        <Route path='/login' render={(props) => <Login {...{ setLoggedIn, ...props }} /> } />
        <Route path='/register' component={Register} />
        <Route path='/logout' render={(props) => <Logout {...{ setLoggedIn, ...props }} /> } />
        <Route path='/advanced-search' component={withAuth(AdvancedSearch)} />
        <Route path='/random-recipies' component={withAuth(RandomRecipies)} />
        <Route path='/meal-plan' component={withAuth(MealPlan)} />
        <Route path='/videos' component={withAuth(Videos)} />
        <Route path='/diets' component={withAuth(Diets)} />
        <Route path='/my-recipies' component={withAuth(MyRecipies)} />
        <Route path='/recipe/:id' component={withAuth(RecipeDetails)} />
        <Route path='/product/:id' component={withAuth(ProductDetails)}/>
        <Route path="*" component={PageNotExists}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
