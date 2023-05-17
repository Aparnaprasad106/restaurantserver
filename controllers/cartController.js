// import carts scheme
const cartitems = require('../models/cartSchema')

// add to cart
exports.addtocart = async (req,res)=>{
// get dish details from req
const {id,title,image,price,quantity} = req.body
try{
    // check dish is present in cart
    const dish = await cartitems.findOne({id})
    if(dish){
        // increment quantity
        dish.quantity+=1
        // update grantTotal
        dish.grantTotal = dish.price*dish.quantity
        // changes save to mongodb
        dish.save()
        // response send to client
        res.status(200).json('items added successfully')

    }
    else{
        // add product to cart
        const newdish =new cartitems({
            id,title,image,price,quantity,grantTotal:price
        })
       await newdish.save()
        // response send to client
        res.status(200).json('item added successfully')
    }

}
catch(error){
    res.status(401).json(error)
}
}

// getcart

exports.getcart = async (req,res)=>{
    try{
     const dishes=await cartitems.find()
     if(dishes){
        res.status(200).json(dishes)
     }
     else{
        res.status(401).json('cart is empty')
     }
    }
    catch(error){
        res.status(401).json(error)
    }
}

// to increment quantity
exports.incrementquantiy = async (req,res)=>{
    const {id}=req.params
    try{
        // check dish is available in cart or not
        dish =  await cartitems.findOne({id})
        if(dish){
            dish.quantity+=1
            dish.grantTotal= dish.price*dish.quantity
            await dish.save()
            const dishes = await cartitems.find()
            res.status(200).json(dishes)
        }
        else{
            res.status(401).json('dish not found in your cart')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

// to decrement quantity
exports.decrementquantity = async (req,res)=>{
    const {id}=req.params
    try{
        // check dish is available in cart
        dish = await cartitems.findOne({id})
        if(dish){
            dish.quantity-=1
            // check quantity is 0
            if(dish.quantity==0){
             await cartitems.deleteOne({id})
             const dishes = await cartitems.find()
             res.status(200).json(dishes)

            }
            else{
                dish.grantTotal=dish.price*dish.quantity
                await dish.save()
                const dishes = await cartitems.find()
                res.status(200).json(dishes)
            }
        }
        else{
            res.status(401).json('dish not found in your cart')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

// empty cart
exports.emptycart = async (req,res)=>{
    try{
     const dishes = await cartitems.deleteMany({})
     res.status(200).json('Your Cart is empty...!')
    }
    catch(error){
        res.status(401).json(error)
    }
}

// remove item from cart
exports.removefromcart = async (req,res)=>{
const {id} = req.params
try{
    const removeitem= await cartitems.deleteOne({id})
    if(removeitem){
        const dishes = await cartitems.find()
   res.status(200).json(dishes)
    }
    else{
        res.status(404).json('Item not found in your cart')
    }
   
}
catch(error){
    res.status(401).json(error)
}
}