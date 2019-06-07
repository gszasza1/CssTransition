import React from 'react';
import logo from './logo.svg';
import './App.css';
import Origin from './SimpleComponent/Origin'
import  First  from './ListComponent/First'

function App() {
  return (
    <div className="App">
      <Origin></Origin>
      <div className="App_transistions">
        <First></First>
      </div>
    </div>
  );
}

export default App;
