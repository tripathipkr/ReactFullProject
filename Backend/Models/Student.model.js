const mongoose=require("mongoose");

const studentSchema=new  mongoose.Schema({
  name:{type:String,required:true},
  phoneNo:{type:Number,required:true},
  age: {type:Number,required:true},
  student_class: {type:String,required:true},
  email: {type:String,required:true},
  password:{type:String,required:true}
})
const StudentModel=mongoose.model("student",studentSchema);

module.exports={StudentModel}