import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';
import DisplaySmurfs from './DisplaySmurfs';

function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log('response from initial axios res', res);
        setSmurfs(res.data);
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  // console.log('Outside of useEffect: ', smurfs);

  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Form />
      <SmurfContext.Provider value={smurfs}>
        <DisplaySmurfs />
      </SmurfContext.Provider>
    </div>
  );
}

export default App;
