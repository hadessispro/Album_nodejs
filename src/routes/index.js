const express = require('express');
const newsAlbum = require('./new');
const siteAlbum = require('./sites');

function route(app){
    app.get('/home',siteAlbum);
    app.get('/album',siteAlbum);
    app.get('/news',newsAlbum);
}


module.exports = route;s