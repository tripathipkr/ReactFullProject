const {Router}=require("express")
const docsRouter=Router();
const{DocsModel}=require("../Models/docs.model");
const { StudentModel } = require("../Models/Student.model");
const { authentication } = require("../Middleware/authentication");
docsRouter.get("/",async(req,res)=>{
    const blogs=await StudentModel.find();
    res.send({blog:blogs})

})
docsRouter.post("/create",async(req,res)=>{
   const{title,description,short_description}=req.body
   const student_id=req.user_id
   const user=await StudentModel.findOne({_id:student_id})
    const new_docs=new DocsModel({
        title,
        description,
        short_description,
        student:user.name,
        student_email:user.email

    });
    await new_docs.save();
    res.send("docs is created")
    
})
docsRouter.put("/edit/:Id",async(req,res)=>{
    const blogId=req.params.Id
    const payload=req.body

    const user_Id=req.user_Id
    const user=await StudentModel.findOne({_id:user_Id})
    const user_email=user?.email;

    const docs=await DocsModel.findOne({_id:blogId})
    const docs_email=docs.student_email

    if(user_email!=docs_email){
       res.send("You are unauthorized to do this")
    }
    else{
        const updated_docs=await DocsModel.findByIdAndUpdate(blogId,payload)
        res.send(`blog${blogId} edited`)
    }
   
    
})
docsRouter.delete("/delete/:Id",async(req,res)=>{
    
    const blogId=req.params.Id
    

    const user_Id=req.user_id

    const user=await StudentModel.findOne({_id:user_Id})
    // console.log(user)
    const user_email=user?.email;

    const docs=await DocsModel.findOne({_id:blogId})
    const docs_email=docs.student_email
    //   console.log(user_email +"  "+docs_email);
    if(user_email!=docs_email){
       res.send("You are unauthorized to delete this")
    }
    else{
        const delete_blog=await DocsModel.findByIdAndDelete(blogId)
        res.send(`blog${blogId} Deleted`)
    }
    
})

module.exports={docsRouter};