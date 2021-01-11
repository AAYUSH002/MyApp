const express        = require('express');
const app            = express();
const dotenv         = require('dotenv');
const MongoClient    = require('mongodb').MongoClient
dotenv.config();

const PORT      = process.env.PORT;
const DB_URI    = process.env.DB_URI;

app.get('/',(req,res)=>{
    res.send({'message':'Success!! Welcome to express','status':200});
})

MongoClient.connect(DB_URI,{ useNewUrlParser: true , useUnifiedTopology: true},(err,sucsess)=>{
    if(err) console.log(err);
    else{
        app.listen(PORT,()=>{
            console.log(`App listening on port ${PORT}`);
        })
    }
})
