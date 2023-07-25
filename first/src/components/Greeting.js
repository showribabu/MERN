
// src/components/Greeting.js
import React from 'react';

const Greeting = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Greeting;