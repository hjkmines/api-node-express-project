const Bootcamp = require('../models/Bootcamp')

//description: get all bootcamps 
//route: GET /api/v1/bootcamps 
//access: public 

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Show all bootcamps', hello: req.hello}); 
}

//description: get one bootcamp 
//route: GET /api/v1/bootcamps/1
//access: public 
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`})
}

//description: create a bootcamp 
//route: POST /api/v1/bootcamps 
//access: Private 
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)
      
    res.status(201).json({
        success: true, 
        data: bootcamp
      })
  } catch (err) {
    res.status(400).json({success: false})
  }
};

//description: update a bootcamp 
//route: PUT /api/v1/bootcamps/1
//access: Private 
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
}

//description: delete a bootcamp 
//route: DELETE /api/v1/bootcamps/1
//access: Private 
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({success: true, msg: `Delete  bootcamp ${req.params.id}`})
}