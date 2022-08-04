const mongoose = require('mongoose')

// const Schema = new mongoose.Schema();
 const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required : true

    },
    email:{
        type:String,
        required:true
    }
})

module.exports = userSchema