import React from 'react';
import logo from './logo.svg';
import './App.css';
import Origin from './SimpleComponent/Origin'
import First from './ListComponent/First'
import Second from './ListComponent/Second'

function Sample(props) {

  return (
    <div className="all_padding bgrnd_color">
      <span className="all_title">{props.title}</span>
      {props.children}
    </div>
  );

}

function App() {
  return (
    <div>

      <div className="App">
        <Origin>
        </Origin>
        <div className="App_transistions">
          <Sample title="Fading">
            <First></First>
          </Sample>
          <Sample title="Increase Width">
            <Second></Second>
          </Sample>
        </div>
      </div>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
