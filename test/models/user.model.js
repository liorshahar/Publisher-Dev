var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Create and exports user schema*/
    
var User = new Schema({
    
   _id: Schema.Types.ObjectId,
    name: String,
    categories: [String],
    borrowd_books: [{type: Schema.Types.ObjectId , ref: 'Book'}],
    unliked_books: [{type: Schema.Types.ObjectId , ref: 'Book'}],
    recently_finished: [{type: Schema.Types.ObjectId , ref: 'Book'}],
    wishlist: [{type: Schema.Types.ObjectId , ref: 'Book'}],
    following_publisher: [{type: Schema.Types.ObjectId , ref: 'Publisher'}]
},{collection : 'userscollection'});

/* Exporting the schema*/
mongoose.model('User' , User);
module.exports = mongoose.model('User');


