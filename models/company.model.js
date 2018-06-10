var Product  = require('../models/product.model'),
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var CompanySchema = mongoose.Schema({
    name: String,
    street: String,
    phone: String 
});

module.exports = mongoose.model('Company' , CompanySchema);