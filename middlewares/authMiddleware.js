import JWT from 'jsonwebtoken'
//protection route token based
import userModel from "../models/userModel.js"
export const requireSignin =async (req,res,next)=>{
  try{
const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET); //, if a client sends a JWT token as part of the authorization header in an HTTP request, you can access it in Node.js using req.headers.authorization
req.user=decode;
next();
  }catch(error){
    console.log(error);
  }
}
//for admin
export const isadmin =async (req,res,next)=>{
  try{
   const user=await userModel.findById(req.user._id);   //database se find ka raha hai
   if(user.role!=1){
    return res.status(401).send({
      success:false,
      message:"Unaouthorized Access"
    })
   } 
   else{
    next();

   }
  }
  catch(error){
    console.log(error);
    res.status(404).send({
      success:false,
      error,
      message:"Error in admin middleware"
    })
  }
}
