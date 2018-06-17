var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    bookModel        = require('../models/book.model');

/* Handle incoming GET / POST publisher request - modular route*/
    

router.get('/' , (req , res)=>{
    res.status(200).json({
        message: 'ok'
    });
});


/*router.get('/getAll' , (req ,res)=>{
    console.log('get All books');
    bookModel.find({}).exec((err , books)=>{
        if(err){
            return res.status(500).send("there was problem finding the books");
        }
        res.json(books);
    });
});*/

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

module.exports = router;