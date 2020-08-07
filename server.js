const express = require('express')
const dotenv = require('dotenv')

//Load env vars 
dotenv.config({path: './config/config.env'});

const app = express(); 

//routes 
app.get('/', (req, res) => {
  res.status(200).json({success: true, data: {id: 5}}); 
})



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${process.env.NODE_ENV} mode on port ${PORT}`))

