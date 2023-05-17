//   import mongoose
const mongoose = require('mongoose')
const reservationSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true,
  },
  date:{
    type:String,
    required:true
  },
  peoples:{
    type:Number,
    required:true
  },
  request:{
    type:String,
    required:true
  }
})

// create model to store products
const reservations=new mongoose.model("reservations",reservationSchema)


// export model
module.exports = reservations