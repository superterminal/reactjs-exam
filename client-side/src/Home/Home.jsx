import React from 'react';
import './Home.css';
import SearchBar from '../shared/SearchBar/SearchBar'

function Home() {
    return <div className="home">
            <h1>Welcome</h1>
            <p>Browse recipies here!</p>
     <SearchBar />
  </div>
}

export default Home;
