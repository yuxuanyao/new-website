import React from 'react';
import './App.css';
import Banner from './js/banner.js'
import Topnav from './js/navbar.js'
import About from './js/about.js'
import HorizontalLine from './js/line.js'
import Education from './js/education.js'



function App() {
  return (
    <div className="App">
      <header className="bannerImage">
        <Topnav />
        <Banner />
        <About />
        <HorizontalLine />
        <Education />
        <HorizontalLine />


      </header>
    </div>
  );
}


export default App;
