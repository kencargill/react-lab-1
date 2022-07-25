import React from 'react';
import './App.css';
import { AdDesigner } from './adDesigner';
import { Votes } from './votes';


function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
      </style>
      <header className="header"><h1>Ice Cream Wars</h1></header>
      <div className='pageBody'>
      <div className='designer'>
      <AdDesigner />
      </div>
      <div className='votes'>
      <Votes />
      </div>
      </div>

    </div>
  );
}

export default App;
