var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports publisher schema*/
    
var User = new Schema({
     _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    image: String,
    backgroundImage: String,
    categories: [String],
    goals: [
        {description: String , target: Number , current: Number}
    ],
    status:[String],
    followers: [Schema.Types.ObjectId],
    following: [Schema.Types.ObjectId],
    borrowd_books: [
        {book_id:{type: Schema.Types.ObjectId} ,current_chapter: Number }
    ],
    unliked_books:[Schema.Types.ObjectId],
    recently_finished:[Schema.Types.ObjectId],
    wishlist:[Schema.Types.ObjectId],
    currently_writing:[Schema.Types.ObjectId]
},{collection : 'users'});

/* Exporting the schema*/
mongoose.model('User' , User);
module.exports = mongoose.model('User');

