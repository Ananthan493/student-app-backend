const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "Name":{type:String,required:true},
        "Rollno":{type:String,required:true},
        "Admno":{type:String,required:true},
        "College":{type:String,required:true}
    }
)

 let studentmodel=mongoose.model("students",Schema);
 module.exports={studentmodel}