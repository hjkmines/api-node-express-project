const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')

//Route files 
const bootcamps = require('./routes/bootcamps.js')

//Load env vars 
dotenv.config({path: './config/config.env'});

const app = express(); 

app.use(logger); 

//mount routers 
app.use('/api/v1/bootcamps', bootcamps)

//PORT SETUP 
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${process.env.NODE_ENV} mode on port ${PORT}`))
