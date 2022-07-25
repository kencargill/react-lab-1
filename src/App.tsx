import React from 'react';
import './App.css';
import { AdDesigner } from './adDesigner';
import { Votes } from './votes';
import Welcome from './welcome';
import Ad from './ad';


function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
      </style>
      <header className="header">
        <h1 className='title'>Ice Cream Wars</h1>
        <Welcome user='ken' />
      </header>
      <div className='pageBody'>
      <Ad darkTheme='darkMode' adName='Chocolate' font='20' className='poster'/>
      <Ad darkTheme='' adName='Vanilla' font='20' className='poster'/>
      <Ad darkTheme='darkMode' adName='Strawberry' font='20' className='poster'/>
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
