var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    publisherModel   = require('../models/publisher.model');
    bookModel        = require('../models/book.model');   



/* Get all publishers */
router.get('/getAllPublishers' , (req , res)=>{
    console.log('Get All publishers');
    publisherModel.find({})
    .then((publisher) => res.status(200).send(publisher))
    .catch((err) => res.status(500).send("There was problem find publishers in database."));
});


/* Adding new publisher*/
router.post('/createNewPublisher' , (req , res)=>{
    console.log(req.body.name)
    publisherModel.create({
        _id: new mongoos.Types.ObjectId(),
        name: 'test',
        image: '',
        books: [],
        goals:[{description: '' , target: 0 , current: 0}],
        followers:[0],
        following:[0],
        status: '',
        currently_writing: [0],
        currently_reading:[0]
    })
    .then((publisher) => res.status(200).send(publisher))
    .catch((err) => res.status(500).send(`There was problem adding publisher to database. ${err}`));
});


/* Get publisher books by publisher name*/
router.get('/getPublisherBooks/:name' , (req , res)=>{
    console.log('Get All Publisher Books');

    publisherModel.findOne({firstName: req.params.name})
    .then((publisher)=> {
          console.log(publisher.books)
          bookModel.find({_id : {$in: publisher.books}})
          .then(books =>{
                console.log(books);
                res.status(200).send(books);
            });
        }).catch((err)=>{res.status(500).send("There was problem find publisher in the database."); 
    });
});

/* Get followers*/

/* Add Followers*/

/* Get Following*/

/* Add new book*/

/* Add goals*/

/* Add status*/

/* Delete book*/


module.exports = router;