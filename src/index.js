const express = require('express');
const morgan = require("morgan")
const {engine} = require('express-handlebars');
const path = require('path');
const db = require('./config/db')
const app = express();
const port = 3000;

const route = require('./routes');



app.use(express(morgan('combined')));
app.use(express.static(path.join(__dirname,"public")));


app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());



app.engine("handlebars",engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'resources/views'));

route(app);
db.connect();
app.listen(port,()=>console.log("welcome to my server !"));
