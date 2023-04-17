const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    username:{
        type : String,
        require : true,
        trim : true
    },
    password :{
        type : String,
        require : true,
        trim : true,
        minlenght : 8

    },
    email:{
        type: String,
        require :true,
        trim : true,
        lowercase :true,
        unique : true,
        validator(val){
            if(!ValidityState.isEmail(val)){
                throw new Error('email is invalid')
            }
        }
    },
    age:{
        type  :Number,
        default: 8,
        validator(val){
            if(val <= 0 ){
                throw new Error('age must be postive number')
            }
        }
    },
    city :{
        type : String
    }
})
module.exports = User;