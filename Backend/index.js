const express =require("express");
const{connection}=require("./config/db")
const {docsRouter}=require("./Routes/student.docs.route")
const bcrypt=require("bcrypt")
const{authentication}=require("./Middleware/authentication")
require("dotenv").config()

var cors = require('cors')
const {StudentModel}=require("./Models/Student.model")
const app=express();
app.use(cors())
const jwt=require("jsonwebtoken");
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Base Api point")
})

app.use("/docs",authentication,docsRouter);

app.post("/signup",async(req,res)=>{
    const {name,email,password,age,student_class,phoneNo}=req.body;
    const ExistUser=await StudentModel.findOne( {$or: [ { email:email }, { phoneNo:phoneNo } ] })
    console.log({ExistUser:ExistUser})
    if(ExistUser!=null){
        res.send({massage:"User all ready exist ,please Login"})
        console.log(ExistUser)
    }
    else{
        bcrypt.hash(password,3,async function(err, hash) {
            try {
                const new_user=new StudentModel({
                    name,
                    email,
                    password:hash,
                    age,
                    student_class,
                    phoneNo,
                })
                await new_user.save()
                res.send({massage:"Signup sucessfull"})
                console.log(new_user)
            } catch (error) {
                 res.status(500).send("Some thing is wrong")
            }
        });
        console.log(req.body)
        res.send({massage:"singup succesfully"})
    }
   

  
    
})

app.get("/result",authentication,(req,res)=>{
     res.send("good report")
})
app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    const user=await StudentModel.findOne({email})
    if(!user){
        res.send({massage:"Sign up first karo na"})
    }else{
        bcrypt.compare(password,user.password, function(err, result) {
            if(result){
                let token = jwt.sign({user_id:user._id,email:user.email },process.env.SECRET_KEY);
                 res.send({msg:"Login Successful",token:token})
                 //console.log({"msg":"Login Successful","token":token})
            }else{
                res.send({massage:"Login Failsed ,Invaild Credential"})
            }
        });
    }
})





app.listen(8080,async()=>{
    try {
        await connection
        console.log("connecting to db");
    } catch (error) {
        console.log(error)
        console.log("error in db connection")
    }
  
    console.log("Listen to 8080 port")
})