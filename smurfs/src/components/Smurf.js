import React from 'react';

function Smurf(props) {
  return (
    <div className='smurf'>
      <p>
        Name: {props.value.name} Age: {props.value.age} Height:{' '}
        {props.value.height}
      </p>
    </div>
  );
}

export default Smurf;
