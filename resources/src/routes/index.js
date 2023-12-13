const express = require('express');
const newsAlbum = require('./new');


function route(app){
    app.get('/news',newsAlbum);
}


module.exports = route;