const express = require('express');
const {port} = require('./config/env');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,"static")));
app.get("/",(req,res)=>{
    res.sendFile("index.html");
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'static/about.html'));
})
app.get('/contactUs',(req,res)=>{
    res.sendFile(path.join(__dirname,"static/contactUs.html"))
})
app.listen(port,()=>{
    console.log("App is running on port " + port);
})