const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    let sitename = "Adidas";
    let searchtext = "search now"
    let arr=["hey",43,42]
    res.render("index", {sitename:sitename,searchtext:searchtext,arr })
});

app.get('/blog', (req, res) => {
    let blogtitle = "Adidas when and why";
    let blogcontent = "it is a very good brand"
    res.render("blogpost",{blogtitle:blogtitle,blogcontent:blogcontent})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});