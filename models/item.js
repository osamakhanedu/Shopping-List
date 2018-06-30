var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* Defining The Schema */ 
/* Item Model define ,Item in a Shopping List
 * It has two field on item name and other its time which has default value  
 */

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item',itemSchema);