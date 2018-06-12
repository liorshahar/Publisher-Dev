var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Create and exports book schema*/

var BookSchema = mongoose.Schema({
    _id:{
        type:Number
    },
    name: {
        type: 'String'
    },
    img: {
        type: 'String'
    },
    publishDate: {
        type: 'String'
    },
    authorName: {
        type: 'String'
    },
    authorId: {
        type: 'Number'
    },
    reviewsToDisplay: {
        type: 'String'
    },
    rank: {
        type: 'String'
    },
    like: {
        type: 'Number'
    },
    comments: {
        type: 'Number'
    },
    share: {
        type: 'Number'
    },
    categories: {
        type: [
            'String'
        ]
    },
    writingProgress: {
        type: 'Number'
    },
    reviews: {
        type: 'Array'
    }
},{collection : 'books'});

module.exports = mongoose.model('Book' , BookSchema);