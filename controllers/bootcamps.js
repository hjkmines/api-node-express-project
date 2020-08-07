//description: get all bootcamps 
//route: GET /api/v1/bootcamps 
//access: public 

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Show all bootcamps'}); 
}

//description: get one bootcamp 
//route: GET /api/v1/bootcamps/1
//access: public 
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`})
}

//description: create a bootcamp 
//route: POST /api/v1/bootcamps 
//access: Private 
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({success: true, msg: 'Create a new bootcamp'})
}

//description: update a bootcamp 
//route: PUT /api/v1/bootcamps/1
//access: Private 
exports.getBootcamps = (req, res, next) = {
  res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`})
}

//description: delete a bootcamp 
//route: DELETE /api/v1/bootcamps/1
//access: Private 
exports.getBootcamps = (req, res, next) = {
  res.status(200).json({success: true, msg: `Delete  bootcamp ${req.params.id}`})
}