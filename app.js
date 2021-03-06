var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    db              = require('./db/db.connection'),
    bookRoutes      = require('./routes/book.routes'),
    publisherRoutes = require('./routes/publisher.routes'),
    userRoutes      = require('./routes/user.routes'),
    messageRoutes   = require('./routes/message.routes'),
    cors            = require('cors'); 
    
/* The app module , middleware and route configuration*/

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/publisher' , publisherRoutes);
app.use('/book' , bookRoutes);
app.use('/user', userRoutes);
app.use('/message', messageRoutes);

app.get('/' , (req , res)=>{
    res.status(200).json({'main routes': 
        [
        {'publisher routes': 'https://hanan-lior-publisher-app.herokuapp.com/publisher'},
        {'books routes': 'https://hanan-lior-publisher-app.herokuapp.com/book'},
        {'user routes': 'https://hanan-lior-publisher-app.herokuapp.com/user'},
        {'message routes': 'https://hanan-lior-publisher-app.herokuapp.com/message'}
    ]});
})
module.exports = app;
