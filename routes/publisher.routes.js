var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    publisherModel   = require('../models/publisher.model');
    bookModel        = require('../models/book.model');   

/* Handle incoming GET / POST publisher request - modular route*/
    




router.get('/' , (req , res)=>{
    res.status(200).json({
        message: 'ok'
    });
});

router.get('/getAllPublishers' , (req , res)=>{
    console.log('Get All publishers');
    publisherModel.find({} , (err , publisher)=>{
        if(err){
            return res.status(500).send("there was problem finding the candidates");
        }
        else{
            console.log(publisher);
            res.send(publisher);
        }
    });
});

router.post('/' , (req , res)=>{
    publisherModel.create({
        id: req.body.id,
        name: req.body.name,
    },
    (err , publisher)=>{
        if (err) return res.status(500).send("There was problem adding publisher to database.");
        res.status(200).send(publisher);
    });
});

/* @Nola*/
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
        }).catch((err)=>{
           res.status(500).send("There was problem find publisher in the database."); 
        });
    });



module.exports = router;