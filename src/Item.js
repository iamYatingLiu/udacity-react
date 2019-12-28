import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


const Item = props => {return (<li>{props.item}</li>)};

Item.propType ={
    item: PropTypes.string.isRequired,
}

export default Item