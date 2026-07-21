import mongoose from "mongoose";

const todoschema=new mongoose.Schema({
    title:String,
    desc:String,
    isdone:Boolean,
    days:Number
});

const todo=mongoose.model('todo',todoschema);

export default todo