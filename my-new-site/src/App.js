import React from 'react';
import californiaImage from './images/California.jpg';
import './App.css';
import './css/banner.css';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="bannerImage" src={californiaImage} alt="california" />
      </header>
    </div>
  );
}




export default App;
