var express          = require('express'),
    router           = express.Router(),
    mongoos          = require('mongoose'),
    publisherModel   = require('../models/publisher.model'),
    companyModel     = require('../models/company.model'),
    productModel     = require('../models/product.model');       

/* Handle incoming GET / POST publisher request - modular route*/
    




router.get('/' , (req , res)=>{
    res.status(200).json({
        message: 'ok'
    });
});

router.get('/getAll' , (req , res)=>{
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


module.exports = router;