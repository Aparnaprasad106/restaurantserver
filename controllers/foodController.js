// import schema
const foods = require('../models/foodSchema')

// add new dish
exports.adddish = async (req,res)=>{
    // get product details from req body
    const {id,category,title,image,price} = req.body
    // logic
    try{
        // check dish is already exist or not
        const dish = await foods.findOne({id})
        if(dish){
            res.status(401).json('Item Already Exist')
        }
        else{
            // add new item
            const newitem = new foods({
                id,category,title,image,price
            })
            // save new items
            await newitem.save()
            res.status(200).json("New Item Added Succesfully")
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}

// edit dish details
exports.edititem = async (req, res) => {
    const { id, category, title, image, price } = req.body;
  
    try {
      const dish = await foods.findOne({ id });
  
      if (dish) {
        const result = await foods.updateOne(
          { id },
          { $set: { category, title, image, price } }
        );
        res.status(200).json('Item Updated Successfully')
      } 
      else {
        res.status(404).json('Item not found');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  // Dispaly dishes
  exports.displaydishes = async (req, res) => {
    const name = req.params.id;
    console.log(name); // Log the value of name
    try {
      const dishes = await foods.find({ category: name  })
      console.log(dishes); // Log the result of the query
      res.status(200).json(dishes);
    } catch (error) {
      console.log(error); // Log any errors
      res.status(401).json(error);
    }
  };
  
  
