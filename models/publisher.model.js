var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports publisher schema*/
    
var Publisher = new Schema({
    firstName : String,
    lastName  : String,
    books     : [Number],
    fides     : [
                    {following: Number},
                    {followers: Number},
                    {books: Number}
                ]
},{collection : 'publishers'});

/* Exporting the schema*/
mongoose.model('Publisher' , Publisher);
module.exports = mongoose.model('Publisher');


/*{
    "firstName": "@Ofir_d",
    "lastName": "d",
    "books": [],
    "fides": [
        {"following": 247 },
        {"followers": 187},
        {"books": 1}
    ]

}*/