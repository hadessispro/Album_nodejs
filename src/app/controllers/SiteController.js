const express=  require("express");
const mydata = require("../models/mydata");


class SiteController{
    home(req,res,next){
        res.render('home')
    }
    async album(req,res,next){
        await mydata.find({})
            .lean()
            .then((mydatas)=>res.json(mydatas))
            .catch(()=>console.log("error fail !"))
    }
}


module.exports = new SiteController;