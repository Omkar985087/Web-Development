import mongoose from "mongoose";

const todoschema=new mongoose.Schema({
    title:String,
    desc:String,
    isdone:Boolean
});

const todo=mongoose.model('todo',todoschema);