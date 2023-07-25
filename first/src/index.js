import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//imports the app from app.js so all components there  can directly use here.....

import App from './App';

// all components use directly here


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering to the html file
root.render(
  <React.StrictMode>
    <App />
    {/* here they use the App from app.js... */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
