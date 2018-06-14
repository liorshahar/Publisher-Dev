var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    userModel        = require('../models/user.model');
    bookModel        = require('../models/book.model'); 

/* Handle incoming GET / POST publisher request - modular route*/
    


router.get('/userByID/:id' , (req , res)=>{
    var userProfile = {};
    console.log('Get All users');
     userModel.findById(req.params.id)
    .then(user=>{
        userProfile.user = user;
        //console.log(userProfile.categories);
        bookModel.find({categories : {$in: userProfile.user.categories}})
        .then(books=>{
            //console.log(books);
            userProfile.offerdBooks = books;
            //console.log(userProfile);
            res.status(200).json(userProfile);

        });
    })
    .catch((err) => res.status(500).send(`there was problem find user ${err}`));
});


router.post('/updateProfile')=>{

}

router.get('/getAll' , (req , res)=>{
    console.log('Get All users');
    userModel.find({} , (err , publisher)=>{
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