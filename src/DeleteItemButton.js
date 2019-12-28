import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const DeleteItemButton = props => {
  const handleDeleteLastItem = event => {
    props.onDeleteLastItem();
  };

  return (
    <button onClick={handleDeleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  );
};


DeleteItemButton.propTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired,
};

export default DeleteItemButton