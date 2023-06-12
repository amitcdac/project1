const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/relationships')
app.use(require('./src/routes/route.js'))

app.listen(3000,()=>console.log('server on'))