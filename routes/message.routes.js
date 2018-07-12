var express          = require('express'),
    router           = express.Router(),
    mongoose          = require('mongoose'),
    messageModel        = require('../models/message.model');


/* Get all messages*/
router.get('/getMessages' , (req , res)=>{
    console.log('Get All Messages');
    messageModel.find({})
   .then((messages)=>res.status(200).send(messages))
    .catch((err)=> res.status(500).send("there was problem finding the candidates"));  
});


module.exports = router;