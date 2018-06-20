var express          = require('express'),
    router           = express.Router(),
    mongoose          = require('mongoose'),
    userModel        = require('../models/user.model');
    bookModel        = require('../models/book.model');
    publisherModel   = require('../models/publisher.model');


/* Get all users*/
router.get('/getAllUsers' , (req , res)=>{
    console.log('Get All users');
    userModel.find({})
    .then((users)=>res.status(200).send(users))
    .catch((err)=> res.status(500).send("there was problem finding the candidates"));  
});

/* Adding new user*/
router.post('/createNewUser' , (req , res)=>{
    console.log('POST request : Create new user');
    console.log(req.body.name)
    userModel.create({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name
    })
    .then((publisher) => res.status(200).send(publisher))
    .catch((err) => res.status(500).send(`There was problem adding publisher to database. ${err}`));
});

/* Get user by id and get offers books*/
router.get('/userByID/:id' , (req , res)=>{
    var userProfile = {};
    console.log('Get userByID');
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
    .then(()=> res.status(200).json({update : 'success'}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Remove Categories thet user unlike*/
router.post('/updateProfileBooksCategoriesRemove' , (req , res)=>{
    console.log('POST request: /updateProfileBooksCategoriesRemove');
    var user   = req.body._id;
    var remCat = req.body.remCat;
    console.log(user , remCat);
    userModel.findByIdAndUpdate({_id: user}, {$pull: { categories: remCat}})
    .then(()=> res.status(200).json({update : 'success'}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Borrow new Book*/
router.post('/borrowNewBook' , (req ,res)=>{
    var borrowBook = {};
    var user   = req.body._id;
    borrowBook.book_id = req.body.book;
    borrowBook.current_chapter = 1;
    console.log(user , borrowBook.book_id);
    userModel.findByIdAndUpdate({_id: user}, {$push: { borrowd_books: borrowBook}}, { 'new': true})
    .then(()=> res.status(200).json({update : 'success'}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Get followers*/
router.get('/GetUserFollowers/:id' , (req , res)=>{
    console.log('Get All User Followers');
    userModel.findById(req.params.id)
    .then(user=>{
        userModel.find({_id : {$in: user.followers}})
        .then(users=>{
            console.log(users);
            res.status(200).json(users);
        });
    })
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Add Followers*/
router.post('/AddFollowerToUser' , (req , res)=>{
    console.log('POST request: /AddFollowerToUser');
    var user   = req.body._id;
    var followerId = req.body.followerId;
    console.log(user , followerId);
    userModel.findByIdAndUpdate({_id: user}, {$addToSet: { followers: followerId}}, { 'new': true})
    .then(()=> res.status(200).json({update : 'success'}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Get Following*/
router.get('/GetUserFollowing/:id' , (req , res)=>{
    console.log('Get All User Following');
    userModel.findById(req.params.id)
    .then(user=>{
        userModel.find({_id : {$in: user.following}})
        .then(users=>{
            console.log(users);
            res.status(200).json(users);
        });
    })
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Add book to wishlist*/
router.post('/AddWishListUser' , (req , res)=>{
    console.log('POST request: /AddWishListUser');
    var user   = req.body._id;
    var wishBookId = req.body.bookId;
    console.log(user , wishBookId);
    userModel.findByIdAndUpdate({_id: user}, {$addToSet: { wishlist: wishBookId}}, { 'new': true})
    .then(()=> res.status(200).json({update : 'success'}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Get wishlist*/
router.post('/getUserWishList' , (req ,res)=>{
    userModel.findById(req.body._id)
    .then(user=>{
        bookModel.find({_id : {$in: user.wishlist}})
        .then(books=>{
            console.log(books);
            res.status(200).json(books);
        });
    })
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

/* Add goals*/
router.post('/AddUserGoal' , (req , res)=>{
    console.log('POST request: /AddUserGoal');
    var goal = {};
    var user   = req.body._id;
    goal.description = req.body.description;
    goal.target = req.body.target;
    goal.current = req.body.current;
    console.log(user , goal);
    userModel.findByIdAndUpdate({_id: user}, {$push: { goals: goal}}, { 'new': true})
    .then(()=> res.status(200).json({update : 'success'}))
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});

module.exports = router;