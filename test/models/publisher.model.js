var mongoose = require('mongoose'),
    Books    = require('./book.model'),
    Schema   = mongoose.Schema;


/* Create and exports publisher schema*/
    
var Publisher = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    books: [{type: Schema.Types.ObjectId , ref: 'Book'}]

},{collection : 'publisherscollection'});

/* Exporting the schema*/
mongoose.model('Publisher' , Publisher);
module.exports = mongoose.model('Publisher');
