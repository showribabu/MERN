// app.js
const express = require('express');
const app = express();
// const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Node.js Web Server!</h1>');
});

app.listen(2000,() => {
  console.log(`Server is runnin`);
});
