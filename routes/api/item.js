const express = require('express'); 
const router =  express.Router(); 

// Item Controller 

const itemsController = require('../../controller/item');


/* 
@route GET /api/items
@desc Get All The Item 
@access Public
*/
router.get('/', itemsController.getAllItems)


/* 
@route Post /api/item
@desc Post The Item To Shopping List
@access Public
*/
router.post('/', itemsController.postItem)



/* 
@route  Delete /api/item/:id
@desc Delete the item from shopping lsit 
@access Public
*/
router.delete('/:id', itemsController.deleteItem)

module.exports = router;