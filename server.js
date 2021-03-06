const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const morgan = require('morgan')
const connectDB = require('./config/db')
const colors = require('colors')


//Load env vars 
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB(); 

//Route files 
const bootcamps = require('./routes/bootcamps.js')


const app = express(); 

//Body parser 
app.use(express.json())

app.use(logger); 

//Dev loggin middleware 
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//mount routers 
app.use('/api/v1/bootcamps', bootcamps)

//PORT SETUP 
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log(`Server is running on port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
  )

  //Handle unhandled promise rejections 
  process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    //close server and exit process 
    server.close(() => process.exit(1))
  })