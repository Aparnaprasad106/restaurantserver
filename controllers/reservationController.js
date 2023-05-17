// import reservation schema
const reservations = require('../models/reservationSchema')

// To add values to reservation scheme
exports.addreservation = async(req,res)=>{
    const {name,phone,date,peoples,request}=req.body
   try{
    const newbooking = new reservations({
        name,phone,date,peoples,request
    })
    newbooking.save()
    res.status(200).json('Your Table Booking Was Completed Successfully')
   }
   catch(error){
    res.status(401).json(error)
   }
}

// to view reservation Details
exports.viewreservation = async (req,res)=>{
    try{
        const reservation=await reservations.find()
        res.status(200).json(reservation)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// cancel Reservation
exports.cancelreservation =  async(req,res)=>{
    const phone = req.params.id
    console.log(phone);
    try{
        await reservations.deleteOne({phone})
        const reservation = await reservations.find()
        res.status(200).json(reservation)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// Reservation Details
exports.reservationdetails = async(req,res)=>{
    const phone = req.params.id
    console.log(phone);
    try{
        const reservation = await reservations.findOne({phone})
        res.status(200).json(reservation)
    }
    catch(error){
        res.status(401).json(error)
    }
}