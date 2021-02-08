let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let usersRule = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userType:{
        type:String,
      
        default:'user'
    },
    date:{
        type:Date,       
        default:Date.now()
    },
    enableFlag:{
        type:String,        
        default:'Y'
    },
})
module.exports = mongoose.model('users',usersRule)