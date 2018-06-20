var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports publisher schema*/
    
var Publisher = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    image: String,
    books: [{type: Schema.Types.ObjectId}],
    goals:[{description: String , target: Number , current: Number}],
    followers:[{type: Schema.Types.ObjectId}],
    following:[{type: Schema.Types.ObjectId}],
    status: String,
    currently_writing: [Number],
    currently_reading:[Number]

},{collection : 'publishers'});

/* Exporting the schema*/
mongoose.model('Publisher' , Publisher);
module.exports = mongoose.model('Publisher');
