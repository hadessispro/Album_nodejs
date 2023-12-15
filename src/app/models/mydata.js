const mongoose = require('mongoose');
const { Schema } = require('mongoose');



const mydata = new Schema({
    name:{type:String,maxlength:250},
    description:{type:String,maxlength:250},
    image:{type:String,maxlength:255},
    videoId:{type:String},
    albums:{type:String,maxlength:250},



})



module.exports = mongoose.model('mydata',mydata);