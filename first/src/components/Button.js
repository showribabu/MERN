// src/components/Button.js
import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
