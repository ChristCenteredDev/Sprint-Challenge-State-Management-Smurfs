import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const Get = props => {
  return (
    <div>
      <button onClick={() => props.getData()}>Display Smurfs</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Get);
