const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config');

const app  = express(); 


/* MiddleWares */
app.use(bodyParser.json());

/* Connect to Mongodb server */
mongoose.connect(config.mongoURI)
         .then(()=> console.log("Connected To Mongodb Server..."))
         .catch(err => console.log(err));
         
/* API Routes */

// API Endpoint Imports 
const item = require('./routes/api/item'); 


// API Endpoints
app.use('/api/items',item);


/* Routes End */




 /* Server Config */ 
const port = process.env.PORT || 5000; // check for port number in enviornment variable if not there then run server on port 5000 

app.listen (port,()=> `Server Running On Port ${port}`);