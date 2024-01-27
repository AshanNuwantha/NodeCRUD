const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    school:{
        type:String,
        required:true
    },
    gradeofexaam:{
        type:Boolean,
        required:true,
        default:false
    }
})
module.exports = mongoose.model('student',studentSchema)