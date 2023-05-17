// Import mongoose
const mongoose = require('mongoose')

const DB = process.env.DATABASE
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log('Mongodb Atlas Connected Succesfully');
}).catch((error)=>{
    console.log(error);
})
