const express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require("path")
require("dotenv/config");


const app=express();

app.use(express.static(path.join(__dirname, './client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/', ()=>{
    res.send('welcome to my forma');
})

/*
Tutaj będzie obsługa formularza kontaktowego
*/

const PORT = process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
    
})