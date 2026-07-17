const express = require('express');
const app = express();
const port = 3000;

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About us!');
});

app.get('/contact', (req, res) => {
  res.send('Hello Contact me!');
});

app.get('/blog/intro-to-js', (req, res) => {
  res.send('Hello intro-to-js');
});

app.get('/blog/intro-to-python', (req, res) => {
  res.send('Hello intro-to-python');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});