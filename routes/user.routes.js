var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    userModel        = require('../models/user.model');
    bookModel        = require('../models/book.model'); 


/* Get all users*/
router.get('/getAllUsers' , (req , res)=>{
    console.log('Get All users');
    userModel.find({})
    .then((users)=>res.status(200).send(users))
    .catch((err)=> res.status(500).send("there was problem finding the candidates"));  
});

    
/* Get user by id and get offers books*/
router.get('/userByID/:id' , (req , res)=>{
    var userProfile = {};
    console.log('Get All users');
    userModel.findById(req.params.id)
    .then(user=>{
        userProfile.user = user;
        console.log(userProfile);
        bookModel.find({categories : {$in: userProfile.user.categories}})
        .then(books=>{
            console.log(books);
            userProfile.offerdBooks = books;
            console.log(userProfile);
            res.status(200).json(userProfile);
        });
    })
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});


/* Update categories that user like*/
router.post('/updateProfileBooksCategoriesAdd' , (req , res)=>{
    console.log('POST request: /updateProfileBooksCategories');
    var user   = req.body._id;
    var addCat = req.body.addCat;
    console.log(user , addCat);
    userModel.findByIdAndUpdate({_id: user}, {$addToSet: { categories: addCat}}, { 'new': true})
    .then(()=> res.status(200).json({update : success}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});


/* Remove Categories thet user unlike*/
router.post('/updateProfileBooksCategoriesRemove' , (req , res)=>{
    console.log('POST request: /updateProfileBooksCategoriesRemove');
    var user   = req.body._id;
    var remCat = req.body.remCat;
    console.log(user , remCat);
    userModel.findByIdAndUpdate({_id: user}, {$pull: { categories: remCat}})
    .then(()=> res.status(200).json({update : success}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});


/* Borrow new Book*/
router.post('/borrowNewBook' , (req ,res)=>{
    var user   = req.body._id;
    var remCat = req.body.newBook;
    console.log(user , newBook);
    userModel.findByIdAndUpdate({_id: user}, {$addToSet: { categories: addCat}}, { 'new': true})
    .then(()=> res.status(200).json({update : success}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Get followers*/

/* Add Followers*/

/* Get Following*/

/* Add book to wishlist*/

/* Get wishlist*/

/* Add goals*/


module.exports = router;