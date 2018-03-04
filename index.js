const express = require('express');
const {port} = require('./config/env');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,"static")));
app.get("/",(req,res)=>{
    res.sendFile("index.html");
})
app.listen(port,()=>{
    console.log("App is running on port " + port);
})