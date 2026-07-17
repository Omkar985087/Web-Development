const express = require('express');
const blog = require('./routes/blog');

const app = express();
const port = 3000;

app.use(express.static('public'))
app.use('/blog', blog);

app.get('/', (req, res) => {
    console.log("hey it's a get request")
    res.send('Hello World!');
}).post('/', (req, res) => {
    console.log("hey it's a post request")
    res.send('Hello World post!');
}).put('/', (req, res) => {
    console.log("hey it's a put request")
    res.send('Hello World put!');
});

app.get("/index1",(req, res) => {
    console.log("hey it's a index")
    res.sendFile('template/index1.html',{root:__dirname})
});

app.get("/api",(req, res) => {
    res.json({a:1,b:2,c:3})
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});