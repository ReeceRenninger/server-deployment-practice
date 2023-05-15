'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// create express singleton, single instance of express 
const app = express(); 
const PORT = process.env.PORT;
// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res, next) => {
  res.status(200).send('I am alive!');

} );

app.get('/success', (req, res, next) => {
  res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) =>{
  next('we have an error!'); // this passes it on to the NEXT middleware if nothing is passed to it, otherwise it will print what we put in it.
});

app.use('*', (req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => console.log('Can you see me on?' + PORT));