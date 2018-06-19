var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports publisher schema*/
    
var User = new Schema({
    _id: Number,
    name: String,
    email: String,
    img: String,
    categories: [String],
    goals: [
        {description: String , target: Number , current: Number}
    ],
    followers: [Number],
    following: [Number],
    borrowd_books: [
        {book_id:Number ,current_chapter: Number }
    ],
    unliked_books:[Number],
    recently_finished:[Number],
    wishlist:[Number]
},{collection : 'users'});

/* Exporting the schema*/
mongoose.model('User' , User);
module.exports = mongoose.model('User');


/*{
    "_id": 1,
    "name": "Yossi mizrachi",
    "email": "yossi@gmail.com",
    "image": "*",
    "goals": [
        {
            "description": "Daily 10 mintues reading",
            "target": 10,
            "current": 5
        },
        {
            "description": "Read 5 days in a row",
            "target": 5,
            "current": 3
        }
    ],
    "borrowd_books": [
        {
            "book_id": 1,
            "current_chapter": 2
        }
    ],
    "unliked_books": [
        1,
        22
    ],
    "recently_finished": [
        3,
        12
    ],
    "wishlist": [
        4,
        1233,
        56
    ]
}*/