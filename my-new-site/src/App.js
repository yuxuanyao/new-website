import React from 'react';
import californiaImage from './images/California.jpg';
import './App.css';

const headerImgStyle = {
  position: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%'
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={headerImgStyle} src={californiaImage} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}




export default App;
