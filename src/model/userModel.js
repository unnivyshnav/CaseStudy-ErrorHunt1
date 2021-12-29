const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library',{ useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email : String,
    password: String,
    
});

var userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;