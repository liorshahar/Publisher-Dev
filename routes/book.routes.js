var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    bookModel        = require('../models/book.model');

/* Handle incoming GET / POST publisher request - modular route*/
    

/* Get all books*/
router.get('/getAll' , (req , res)=>{
    console.log('Get All Books');
    bookModel.find({} , (err , publisher)=>{
        if(err){
            return res.status(500).send("there was problem finding the candidates");
        }
        else{
            console.log(publisher);
            res.send(publisher);
        }
    });
});

/* Get book by id*/

/* Get follwers*/

/* Get reviews*/

/* Get Chapters*/

module.exports = router;