const express = require('express');

class NewsController{
    index(req,res,next){
        res.render("news"); 
    }
    notfound(req,res){
       res.send('"hello world');
    }
}


module.exports = new NewsController;