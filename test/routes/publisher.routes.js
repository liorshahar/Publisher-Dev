var express          = require('express'),
    router           = express.Router(),
    mongoose          = require('mongoose'),
    publisherModel   = require('../models/publisher.model');
    bookModel        = require('../models/book.model');   

/* Handle incoming GET / POST publisher request - modular route*/
    


/* Create new publisher*/
router.post('/createNewPublisher' , (req , res) =>{
    console.log(`POST request: createNewPublisher: ${req.body.name}`);
   
    var publisher = new publisherModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
   
    publisher.save((err)=>{
        if(err){
            res.status(500).json({'message': 'somthing went wrong'});
        }else{
            res.status(200).json({'message': 'ok'});
        }
    });
});



/* Create New Book By Publisher*/
router.post('/createNewBook' , (req , res) =>{
    console.log(`POST request: createNewBook: ${req.body.bookName} ${req.body.authorId}`);
    
    /* Create new book document*/
    console.log(req.body.authorId);
    var newBook  = new bookModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.bookName,
        author: req.body.authorId,
        title: req.body.bookTitle,
        img: `http://${req.body.img}`,
        authorName: req.body.autorName,
        categories: req.body.categories
    });

      newBook.save((err)=>{
        if(err){
            console.log({'message': `somthing went wrong with add new book ${err}`});
            res.status(500).json({'message': `somthing went wrong with add new book ${err}`});
        }else{
            console.log(req.body.authorId + " " + newBook._id);

            /* Adding to the publisher book array the new book*/
             publisherModel.findById(req.body.authorId)
            .then((publisher) => {
                console.log(publisher);
                publisher.books.push(newBook._id);
                publisher.save((err)=>{
                    if(err){
                        console.log({'message': `somthing went wrong with add new book to publisher ${err}`});
                        res.status(500).json({'message': `somthing went wrong with add new book to publisher ${err}`});
                    }
                    else{
                        res.status(200).json({'message' : 'adding new book to publisher'});
                    }
                });
            })
            .catch(err => res.status(500).json({'message': `somthing went wrong with add new book to publisher ${err}`}));
    
        }
    });
});


/* Get Publusher Books by publisher Id*/
router.get('/getPublisherBooks/:id' , (req , res) =>{
    console.log(`GET request: getPublisherBooks: ${req.params.id}`);
    publisherModel.findOne({_id: req.params.id})
    .populate('books')
    .exec((err , books)=>{
        if(err){
            console.log(`error populate books ${err}`);
            res.status(500).json({'message': `error populate books ${err}`});
        }else{
            console.log(books);
            res.status(200).json(books);

        }
    })
});

/*
router.get('/' , (req , res)=>{
 
});

router.get('/getAllPublishers' , (req , res)=>{

});

router.post('/' , (req , res)=>{

});


router.get('/getPublisherBooks/:name' , (req , res)=>{
   
});*/


module.exports = router;