const mongoose=require("mongoose");

const docsSchema=new  mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  short_description: {type:String},
  student:{type:String},
  student_email:{type:String}
},{
    timestamps:true,
    versionKey:false
})
const DocsModel=mongoose.model("docs",docsSchema);

module.exports={DocsModel}