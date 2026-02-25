const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
    title:{
        type:String, 
        required: true
    },
    description:String,
    difficulty:{
        type:String,
        enum:["Easy", "Medium", "Hard"],
    },
    question:{
        type:String,required: true
    },
    schema:{
        type:String,required:true
    },
});

module.exports = mongoose.model("Assignment", AssignmentSchema);