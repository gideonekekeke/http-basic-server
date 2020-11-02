const mongoose = require('mongoose');



const myschema = mongoose.Schema({
    name : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        min : 3
    }
  
})







module.exports = mongoose.model('student', myschema)


