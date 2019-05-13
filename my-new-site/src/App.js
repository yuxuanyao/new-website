import React from 'react';
import './App.css';
import Banner from './js/banner.js'
import Topnav from './js/topnav.js'
import About from './js/about.js'




function App() {
  return (
    <div className="App">
      <header className="bannerImage">
        <Topnav />
        <Banner />
        <About />


      </header>
    </div>
  );
}


export default App;
