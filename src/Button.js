import React from 'react';
import { buttonStyles } from './hasyem';

export const CustomButton = ({ clicked, name }) => {
  return (
    <button
      onClick={clicked}
      style={buttonStyles}
    >
      {name}
    </button>
  );
}
