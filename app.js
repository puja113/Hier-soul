

const express = require ('express')
const bd= require('body-parser')
const cors=require('cors')
const mongoose= require('mongoose')
const db=require('./db')




const users = require ('./routers/users')
const client = require ('./routers/client')
const skills = require ('./routers/skills')




const app=express();
app.use(cors());
app.use(bd.urlencoded({ extended: false }))
app.use(bd.json());

try{
    mongoose.connect("mongodb://127.0.0.1/hier-soul")
    console.log("connection successfull")
}
catch(error){
    console.log(error)
}
 


app.use('/User',users)
// app.use('/Client',client)
// app.use('/Skills',skills)








app.listen(4000) 