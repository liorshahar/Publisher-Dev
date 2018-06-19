var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports book schema*/

var BookSchema = mongoose.Schema({
    _id: Number,
    title: String,
    img: String,
    publishDate: Date,
    authorName: String,
    authorId: Number,
    rank: Number,
    like:Number,
    reviews: [{reviewerId:Number , description:String}],
    followers:[Number],
    share:Number,
    categories:[String],
    writingProgress:Number,
    chapters:[{chapter:Number , readingTime:Number , content:String}]

},{collection : 'books'});

module.exports = mongoose.model('Book' , BookSchema);

/*
{
    "_id": 1,
    "title": "The Hazel wood",
    "img": "#",
    "publishDate": "12/12/2000",
    "authorName": "@veronicaRoth",
    "authorId": 1,
    "reviewsToDisplay": "the best book of the year!",
    "rank": "avrage rank",
    "like": 234,
    "reviews": [
        {
            "reviewerId": 123,
            "description": "this is grate book1"
        },
        {
            "reviewerId": 345,
            "description": "this is grate book2"
        },
        {
            "reviewerId": 4,
            "dscription": "this is grate book3"
        }
    ],
    "follwers": [
        123,
        345
    ],
    "share": 136,
    "categories": [
        "#drama",
        "#fantasy"
    ],
    "writingProgress": 78,
    "chapters": [
        {
            "chapter": 1,
            "readingTime": 15,
            "content": "lorm ipshom bla bla"
        },
        {
            "chapter": 2,
            "readingTime": 14,
            "content": "lorm ipshom bla bla"
        },
        {
            "chapter": 3,
            "readingTime": 15,
            "content": "lorm ipshom bla bla"
        }
    ]
}e*/