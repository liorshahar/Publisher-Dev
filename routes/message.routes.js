var express          = require('express'),
    router           = express.Router(),
    mongoose          = require('mongoose'),
    messageModel        = require('../models/message.model');






/* Get all messages*/
router.get('/get user Messages' , (req , res)=>{
    console.log('Get All Messages');
    messageModel.find({})
   .then((messages)=>res.status(200).send(messages))
    .catch((err)=> res.status(500).send("there was problem finding the candidates"));  
});



// /* Get user by id and get offers books*/
// router.get('/getUserMessages/:id' , (req , res)=>{
//     var messages = {};
//     console.log('Get User Messages');
//     messageModel.find({UserId:req.params.id})
//     .then(messages=>{
//         messages = messages;
//         console.log(messages);
//         res.status(200).json(messages);
//     });
//     .catch((err) => res.status(500).send(`there was problem find user ${err}`));
// });


// /* Get user by id and get offers books*/
// router.get('/getUserInboxMessages/:id' , (req , res)=>{
//     var messages = {};
//     console.log('Get User Inbox Messages');
//     messageModel.findById(req.params.id)
//     .then(messages=>{
//         messages = messages;
//         console.log(messages);
//         res.status(200).json(messages.Inbox);
//     });
//     .catch((err) => res.status(500).send(`there was problem find user ${err}`));
// });

// /* Get user by id and get offers books*/
// router.get('/getUserSentMessages/:id' , (req , res)=>{
//     var messages = {};
//     console.log('Get User Sent Messages');
//     messageModel.findById(req.params.id)
//     .then(messages=>{
//         messages = messages;
//         console.log(messages);
//         res.status(200).json(messages.Sent);
//     });
//     .catch((err) => res.status(500).send(`there was problem find user ${err}`));
// });

module.exports = router;