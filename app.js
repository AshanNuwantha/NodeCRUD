/* first npm init
   npm install express
   npm install mongodb
   npm install mongoose 
   npm install nodemon
   npm install -g nodemon --save-dev
   nodemon run start */
const express = require('express')
const mongoose = require('mongoose')
const urlDB = 'mongodb://localhost/Mydb' // databse name is Mydb

const app = express()

mongoose.connect(urlDB,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})
app.use(express.json())

const studentServices =require('./services/students')
app.use('/students',studentServices) // all the student request pass to studentServices

app.listen(9000,function(){
    console.log('node server is started')
})