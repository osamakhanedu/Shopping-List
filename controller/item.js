/*
  This is the controllor For Item model
*/

const Item = require('../models/item');


//@desc Get All The Item 

const getAllItems = (req,res)=>{ 
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
}

//@desc  Post the Item to the Shopping List 
const postItem = (req,res)=>{ 
    const item = new Item({ 
      name : req.body.name
    });

    item.save().then(item=> res.json(item));
}

//@desc  Delete Item from shopping List
const deleteItem = (req,res)=>{ 
  
  Item.findById(req.params.id)
  .then(item => item.remove())
  .then(()=> res.json({success:true}))
  .catch(err=> res.status(404).json({success:false}));


}



module.exports = { 
    getAllItems,
    postItem,
    deleteItem
}