// import mongoose
const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    flat:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
})

// create mode; to store create delivery details
const deliveries = new mongoose.model("delivery",deliverySchema)

// export model
module.exports = deliveries