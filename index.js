// to automatically load . env file
require('dotenv').config()

// to import connection file
require('./db/connection')

// import cors,exress
const cors = require('cors')
const express = require('express')
// import router
const router = require('./routes/router')

// create server app
const server = express()
// to hold poer number
const PORT = 3000
// run app
server.listen(PORT,()=>{
    console.log(`Restaurant server start at the port ${PORT}`);
})

// use cors,express.json in server app
server.use(cors())
server.use(express.json())
server.use(router)

// route
server.get('/',(req,res)=>{
    res.send('Restaurant server started!!!')
})