import mongoose from "mongoose";
import express from "express";
import todo from "./models/todo.js"

let conn=await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const Todo=new todo({title:"hey first todo",
        desc:"description of this todo",
        isdone:false,
        days:Math.floor(Math.random()*45+5*Math.random())
    })
    Todo.save();
    res.send('Hello World!');
});

app.get('/a',async (req, res) => {
    const Todo=await todo.findOne({})
    res.json({Title:Todo.title,desc:Todo.desc});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
