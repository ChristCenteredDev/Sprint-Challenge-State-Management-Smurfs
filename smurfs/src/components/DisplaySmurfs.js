import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';

function DisplaySmurfs() {
  const smurfs = useContext(SmurfContext);

  console.log('Display smurfs', smurfs);
  return (
    <div className='smurfs-container'>
      {smurfs.map(smurf => {
        return <Smurf value={smurf} key={smurf.name} />;
      })}
    </div>
  );
}

export default DisplaySmurfs;
