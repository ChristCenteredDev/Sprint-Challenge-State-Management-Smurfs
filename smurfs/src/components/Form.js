import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  });

  const handleChangesName = e => {
    setSmurf({ ...smurf, name: e.target.value });
  };

  const handleChangesAge = e => {
    setSmurf({ ...smurf, age: parseInt(e.target.value) });
  };

  const handleChangesHeight = e => {
    setSmurf({ ...smurf, height: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(res => console.log('Response from POST', res))
      .catch(err => console.log('Error from POST', err.response));
    setSmurf({
      name: '',
      age: 0,
      height: ''
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={smurf.name}
        name='name'
        placeholder='Name for Smurf'
        onChange={handleChangesName}
      />
      <input
        type='number'
        value={smurf.age}
        name='age'
        placeholder='Age for Smurf'
        onChange={handleChangesAge}
      />
      <input
        type='text'
        value={smurf.height}
        name='height'
        placeholder='Height for Smurf'
        onChange={handleChangesHeight}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
