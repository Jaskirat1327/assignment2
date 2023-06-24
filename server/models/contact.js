let mongoose = require('mongoose');

// create a model class
let ContactModel = mongoose.Schema({
    contactname: String,
    contactnumber: Number,
    emailaddress: String
},
{
    collection: "Contacts"
});

module.exports = mongoose.model('contacts', ContactModel);