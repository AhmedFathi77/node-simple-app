const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:true,
    }
}, {timestamp: true});

mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const User = mongoose.model('user' , user);

module.exports = User;