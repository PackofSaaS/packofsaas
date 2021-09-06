const mongoose = require('mongoose');

const EmailssSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email: {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model("Emails", EmailssSchema);