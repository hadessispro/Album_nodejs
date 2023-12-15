const express =  require("express");
const mongoose = require('mongoose');


async function connect(){
    await mongoose.connect('mongodb://127.0.0.1:27017/list_database_academy')
            .then(()=>console.log("connect success !"))
            .catch(()=>console.log("connect failer ! if u can check file"));

}

module.exports = {connect};



