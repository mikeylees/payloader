const express = require('express');
const {port} = require('./config/env');
const app = express();
app.listen(port,()=>{
    console.log("App is running on port " + port);
})