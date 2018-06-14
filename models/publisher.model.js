var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports publisher schema*/
    
var Publisher = new Schema({
    _id: Number,
    name: String,
    image: String,
    books: [Number],
    goals:[{description: String , target: Number , current: Number}],
    followers:[Number],
    following:[Number],
    status: String,
    currently_writing: [Number],
    currently_reading:[Number]

},{collection : 'publishers'});

/* Exporting the schema*/
mongoose.model('Publisher' , Publisher);
module.exports = mongoose.model('Publisher');


/*{
    "_id": 6574,
    "name": "@Nola",
    "image": "*",
    "books": [
        3,
        4
    ],
    "goals": [
        {
            "description": "write 5 days i a row",
            "target": 5,
            "current": 1
        }
    ],
    "followers": [
        1,
        123
    ],
    "following": [
        345
    ],
    "status": "hello my name is Nola and fifklfmdfkl",
    "currently_writing": [
        2
    ],
    "currently_reading": [
        1
    ]
}*/