const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let StudentSchema =  new Schema({
    rollno: { type: String, required:true },
    fistname: { type: String },
    lastname : { type: String },
    fathername: { type: String },
    adharcard: { type: String },
    mobileno: { type: String },

})
module.exports = mongoose.model('Student',StudentSchema)