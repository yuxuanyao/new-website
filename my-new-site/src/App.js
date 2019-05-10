import React from 'react';
import californiaImage from './images/California.jpg';
import './App.css';
import './css/banner.css';
import Topnav from './js/topnav.js'




function App() {
  return (
    <div className="App">
      <header className="bannerImage">

        <Topnav />

        <div className="bannerOverlay">
          <h1 className="bannerNameHello">Hello! I'm </h1>
          <h1 className="bannerName">Yuxuan Yao</h1>
        </div>
      </header>
    </div>
  );
}


export default App;
