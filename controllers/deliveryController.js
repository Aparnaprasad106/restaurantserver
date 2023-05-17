// import schema
const deliveries = require('../models/deliverySchema')

// add delivery details
exports.adddeliverydetails = async(req,res)=>{
    const {username,flat,street,state} = req.body
    try{
        const delivery = new deliveries({
            username,flat,street,state
        })
        delivery.save()
        res.status(200).json('delivery details stored succesfully')

    }
    catch(error){
        res.status(401).json(error)
    }
}

// view delivery details
exports.viewdeliverydetails = async(req,res)=>{
    try{
        const deliverydetails = await deliveries.find()
        res.status(200).json(deliverydetails)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// remove delivery details
exports.removedeliverydetails = async(req,res)=>{
 const username =req.params.id
 try{
   await deliveries.deleteOne({username})
   const details = await deliveries.find()
   res.status(200).json(details)

 }
 catch(error){
    res.status(401).json(error)
 }
}