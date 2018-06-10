var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    db              = require('./db/db.connection'),
    bookRoutes = require('./routes/book.routes'),
    publisherRoutes = require('./routes/publisher.routes');

/* The app module , middleware and route configuration*/

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/publisher' , publisherRoutes);
app.use('/book' , bookRoutes);

module.exports = app;
