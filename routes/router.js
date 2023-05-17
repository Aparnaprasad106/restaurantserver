// import express
const express = require('express')

// import controllers
 const foodController = require('../controllers/foodController')
// import reservation controller
 const reservationController = require('../controllers/reservationController')
// import cartController
const cartController = require('../controllers/cartController')
// import deliverycontroller
const deliverycontroller = require('../controllers/deliveryController')


// create objext for router class to set up path
const router = new express.Router()


// add new product
router.post('/item/add-item',foodController.adddish)

// edit product
router.post('/item/edit-item',foodController.edititem)

// add reservation
router.post('/item/reservation',reservationController.addreservation)

// view reservation
router.get('/item/view-reservation',reservationController.viewreservation)

// cancel reservation
router.delete('/reservation/cancel/:id',reservationController.cancelreservation)

// view dishes
router.get('/item/view-item/:id',foodController.displaydishes)

// add to cart
router.post('/cart/add-item',cartController.addtocart)

// get cart
router.get('/cart/get-item',cartController.getcart)

// increment quantity
router.get('/cart/increment-quantity/:id',cartController.incrementquantiy)

// decrement quantity
router.get('/cart/decrement-item/:id',cartController.decrementquantity)

// empty cart
router.delete('/cart/empty',cartController.emptycart)

// delete from  cart
router.delete('/cart/remove-item/:id',cartController.removefromcart)

// Reservation Details
router.get('/reservation/display/:id',reservationController.reservationdetails)

// Delivery Details
router.post('/delivery/add-details',deliverycontroller.adddeliverydetails)

// view delivery details
 router.get('/delivery/view-delivery',deliverycontroller.viewdeliverydetails)

//  remove delivery details
router.delete('/delivery/remove/:id',deliverycontroller.removedeliverydetails)

// exports router
module.exports = router 