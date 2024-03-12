import { comparePassword, hashPassword } from "../helpers/authhelper.js";
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"

export const registerController= async(req,res)=>{
      try{
        const {name,email,password,phone,address} =req.body  //get data from client
        //validation (postman me body me jo data hai waha se yaha leaae)
        if(!name){     //think here req.body.name can be used or not
          return  res.send({error:'Name is Required'});
        }
        if(!email){   
          return  res.send({error:'Email is Required'});
        }if(!password){     
          return  res.send({error:'password is Required'});
        }
        if(!phone){    
          return  res.send({error:'phone No.is Required'});
        }
        if(!address){     
          return  res.send({error:'address is Required'});
        }
// existing user checking
  const existingUser= await userModel.findOne({email});  //check karega collection me single email hai ki usse jyada
  if(existingUser){
    return res.status(200).send({
      success:true,
      message:'Already Register please login',
    })
  }
  //register user
   const hashedPassword =await hashPassword(password);
   //save
   const user = await new userModel({name,email,address,password:hashedPassword,phone}).save();

    res.status(201).send({
    success:true,
    message:'user Register Successfully',
     user
    })



      }
      catch(error){ //f there's an error during registration, this code will log the error and send a response to the client with a 500 status code indicating an internal server erroralong with details about the error.
       console.log(error);
       res.status(500).send({ // The response body is a JSON object containing details about the error:
        success:false,
        message: 'Error in Registration',
        error
       })
      }


} 
//login controller
export const loginController= async(req,res)=>{
   try{
   const {email,password} =req.body;
   //validation
   if(!email ||!password){
    return res.status(404).send({
      success:false,
      message:"Invalid Email or Password"
    })
   }
   // check user
   const user= await userModel.findOne({email});
   if(!user){
    return res.status(200).send({
      success:true,
      message:"Email is not registerd"
    })
   }
   const match=await comparePassword(password,user.password)
   if(!match){
    return res.status(200).send({
      success:false,
      message:"Invalid Password"
    })
   }
   const token =await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'}) //by the sign method we make token in which we have a user id (playload) jiss ko dhiyan me rakh kar token banauga ,and then server secret key, aur kitne din baad token expires hoga
   res.status(200).send({
    success:true,
    message:"login successfully",
    user:{
    name:user.name,
    email:user.email,
    phone:user.phone,
    address:user.address,
    },
    token,
   })


   }
   catch(error){
    console.log(error);
       res.status(500).send({ 
        success:false,
        message: 'Error in Login',
        error
       })

   }
}
//test
export const testControllers=(req,res)=>{
 res.send("user Protected"); 
}
