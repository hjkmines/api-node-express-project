const express = require('express')
const dotenv = require('dotenv')

//Load env vars 
dotenv.config({path: './config/config.env'});

const app = express(); 

//routes 

//index route to all bootcamps 
app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({success: true, msg: 'Show all bootcamps'}); 
})

//show route to specifc bootcamp 
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`}); 
})

//add a bootcamp 
app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({success: true, msg: 'Create new bootcamp'})
})

//update a bootcamp 
app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
})

//delete a bootcamp 
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Deleted bootcamp ${req.params.id}`})
})


//PORT SETUP 
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${process.env.NODE_ENV} mode on port ${PORT}`))

