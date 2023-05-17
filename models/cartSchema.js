//   import mongoose
const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
  id:{
    type:Number,
    unique:true,
    required:true
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
  },
  quantity:{
    type:Number,
    required:true
  },
  grantTotal:{
    type:Number,
    required:true
  }
})

// create model to store products
const cartitems=new mongoose.model("cartitems",cartSchema)

// export model
module.exports = cartitems