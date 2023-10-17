const jwt = require("jsonwebtoken");

require("dotenv").config();
const authentication=(req,res,next)=>{

  const token=req.headers.authorization?.split(" ")[1]

console.log("h1")
if(!token){
  res.send("Login first")
  console.log(token)
}
else{
  jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if(err){
          res.send("Invailid credential")
        }else{
          console.log(token);
          const user_id=decoded.user_id
          req.user_id=user_id;
          console.log(user_id);
         next();
        }
      });
  }
}

module.exports={authentication}