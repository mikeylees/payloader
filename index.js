const express = require('express');
const config = require('./config/env');
const app = express();
console.log(config.port);