import React from 'react';
import './Home.css';
import SearchBar from '../shared/SearchBar/SearchBar'

function Home() {
    return <div className="img">
        <br/><br/><br/><br/>
    <h1 className="cover-heading">Welcome</h1>
    <p className="cover-heading">Browse recipies here!</p>
        <br/><br/><br/><br/>
     <SearchBar />
  </div>
}

export default Home;
