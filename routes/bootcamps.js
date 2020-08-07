const express = require('express')
const router = express.Router(); 

//routes 

//index route to all bootcamps 
router.get('/', (req, res) => {
  res.status(200).json({success: true, msg: 'Show all bootcamps'}); 
})

//show route to specifc bootcamp 
router.get('/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`}); 
})

//add a bootcamp 
router.post('/', (req, res) => {
  res.status(200).json({success: true, msg: 'Create new bootcamp'})
})

//update a bootcamp 
router.put('/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
})

//delete a bootcamp 
router.delete('/:id', (req, res) => {
  res.status(200).json({success: true, msg: `Deleted bootcamp ${req.params.id}`})
})

module.exports = router; 

