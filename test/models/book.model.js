var mongoose  = require('mongoose'),
    Publisher = require('./publisher.model'),
    Schema    = mongoose.Schema;
      


/* Create and exports book schema*/

var BookSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    review: String,
    img: String,
    authorName: String,
    categories:[String],
    author: {type: Schema.Types.ObjectId , ref: 'Publisher'}

},{collection : 'bookscollection'});

module.exports = mongoose.model('Book' , BookSchema);

