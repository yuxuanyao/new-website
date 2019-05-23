import React from 'react';
import './App.css';
import Banner from './js/banner.js'
import Topnav from './js/navbar.js'
import About from './js/about.js'
import HorizontalLine from './js/line.js'
import Education from './js/education.js'
import Extracurricular from './js/extracurricular.js'
import Skills from './js/skills.js'


function App() {
  return (
    <div className="App">
      <header className="bannerImage">
        <Topnav />
        <Banner />
      </header>

      <About />


      <Extracurricular />
      <Education />
      <HorizontalLine />
      <Skills />

    </div>
  );
}


export default App;
