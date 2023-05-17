//   import mongoose
  const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
  id:{
    type:Number,
    unique:true,
    required:true
  },
  category:{
    type:String,
    required:true,
  },
  title:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  }
})

// create model to store products
const foods=new mongoose.model("foods",foodSchema)

// export model
module.exports = foods