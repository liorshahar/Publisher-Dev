var express          = require('express'),
    router           = express.Router(),
    mongoose          = require('mongoose'),
    userModel        = require('../models/user.model');
    bookModel        = require('../models/book.model'); 




/* Create new user*/
router.post('/createNewUser' , (req , res) =>{
    console.log(`createNewUser: ${req.body.name}`);
   
    var user = new userModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    });
   
    user.save((err)=>{
        if(err){
            res.status(500).json({'message': 'somthing went wrong'});
        }else{
            res.status(200).json({'message': 'ok'});
        }
    });
});



/* Get all users*/
router.get('/getAllUsers' , (req , res)=>{

});

/* Get user by id and get offers books*/
router.get('/userByID/:id' , (req , res)=>{

});

/* Update categories that user like*/
router.post('/updateProfileBooksCategoriesAdd' , (req , res)=>{
    console.log('POST request: /updateProfileBooksCategories');
    var user   = req.body._id;
    var addCat = req.body.addCat;
    console.log(`Adding new like categorie to user: ${user} categorie:${addCat}`);
    userModel.findByIdAndUpdate({_id: user}, {$addToSet: { categories: addCat}}, { 'new': true})
    .then(()=> res.status(200).json({'update': 'success'}))
    .catch((err) => res.status(500).send(`there was problem to add categories ${err}`));
});


/* Remove Categories thet user unlike*/
router.post('/updateProfileBooksCategoriesRemove' , (req , res)=>{
    console.log('POST request: /updateProfileBooksCategoriesRemove');
    var user   = req.body._id;
    var remCat = req.body.remCat;
    console.log(user , remCat);
    userModel.findByIdAndUpdate({_id: user}, {$pull: { categories: remCat}})
    .then(()=> res.status(200).json({update : success}))
    .catch((err) => res.status(500).send(`there was problem to remove categorie user ${err}`));
});

/* Borrow new Book*/
router.post('/borrowNewBook' , (req ,res)=>{

});


module.exports = router;