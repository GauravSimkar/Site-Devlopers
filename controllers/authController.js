import { comparePassword, hashPassword } from "../helpers/authhelper.js";
import ordermodel from "../models/ordermodel.js";
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"
import validator from "validator";


export const registerController= async(req,res)=>{
      try{
        const {name,email,password,phone,address,answer} =req.body  //get data from client
        //validation (postman me body me jo data hai waha se yaha leaae)
        if(!name){     //think here req.body.name can be used or not
          return  res.send({message:'Name is Required'});
        }
        if(!email){   
          return  res.send({message:'Email is Required'});
        }if(!password){     
          return  res.send({message:'password is Required'});
        }
        if(!phone){    
          return  res.send({message:'phone No.is Required'});
        }
        if(!address){     
          return  res.send({message:'address is Required'});
        }
        if(!answer){     
          return  res.send({message:'Answer is Required'});
      }

// existing user checking
  const existingUser= await userModel.findOne({email});  //check karega collection me single email hai ki usse jyada
  if(existingUser){
    return res.status(200).send({
      success:false,
      message:'Already Register please login',
    })
  }
  //register user
   const hashedPassword =await hashPassword(password);
   //save
   const user = await new userModel({name,email,address,password:hashedPassword,phone,answer}).save();

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
        message: 'Please enter correct Email',
        error
       })
      }


} 
//login controller
export const loginController= async(req,res)=>{
   try{
   const {email,password} =req.body;
   //validation
  //  if(!email){
  //   res.status(400).send({message:'Email is required'})
  //  }
  //  if(!password){
  //   res.status(400).send({message:'password is required'})
  //  }
   if(!validator.isEmail(email) ||!password){
    return res.status(404).send({
      success:false,
      message:"Invalid Email or Password"
    })
   }
   // check user
   const user= await userModel.findOne({email});
   if(!user){
    return res.status(200).send({
      success:false,
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
    id:user._id , 
    name:user.name,
    email:user.email,
    phone:user.phone,
    address:user.address,
    role:user.role
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
export const forgatPasswordController=async (req,res)=>{
  try{
    const {email,newpassword,answer}=req.body;
    if(!email){
      res.status(400).send({message:'Email is required'})   //400 code is bad request response status code the server cannot or will not process the request due to something that is perceived to be a client error
       
    }
    if(!answer){
      res.status(400).send({message:'Answer is required'}) 
    }
    if(!newpassword){
      res.status(400).send({message:'Password is required'}) 
    }
    //check email and answer if this is correct then change the new password
    const user= await userModel.findOne({email,answer});
    if(!user){
      res.status(404).send({  //generated when a user attempts to access a webpage that does not exist, has been moved, or has a dead or broken link. 
        success:false,
        message:' Wrong Email or Answer ',
         
        })
    }
    const hashed =await hashPassword(newpassword);
     const tan=await userModel.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
    success:true,
    message:"Password Reset Sucessfully",
    tan,
    });
    //api made


  }
  catch(error){
    console.log(error);
    res.status(500).send({ 
      success:false,
      message: 'Server Error',
      error
     })

  }
}
//profule update controller
export const updateProfileController=async(req,res)=>{
 try {
//logic
 const {name,email,password,phone,address} =req.body 
 const user =await userModel.findById(req.user._id);  //jo user sign in kie hua hai abhi usko data base me id ke base pe find karege
/// password checking
 if(password&&password.length<6){
  return res.json({error:'Password is required and 6 character long'})
 }
 const hashedPassword=password?await hashPassword(password):undefined //no need to changes
 const updatedUser=await userModel.findByIdAndUpdate(req.user._id,{
   name:name ||user.name,
   password:hashedPassword|| user.password,
   phone:phone || user.phone,
   address:address||user.address,
},{new:true})
res.status(200).send({
  success:true,
  message:"Profile updated Successfully",
  updatedUser,
  });






 } catch (error) {
  console.log(error);
  res.status(500).send({ 
    success:false,
    message: 'Error in profile Update',
    error
   })
 }

}
//order done by user
export const getOrdersControllers=async(req,res)=>{
  try{
    //logic
    const orders=await ordermodel.find({buyer:req.user._id}).populate("products","-photo").populate("buyer","name")
    res.json(orders);
       res.status(200).send({
        success:true,
        message: 'Order placed',
        orders
       })
    
  }catch(error){
    console.log(error)
    res.status(500).send({ 
      success:false,
      message: 'Error while getting orders',
      error
     })
  }
}
export const getAllOrdersControllers=async(req,res)=>{
  try{
    //logic
    const orders=await ordermodel.find({}).populate("products","-photo").populate("buyer","name").sort({createdAt:"-1"});
    res.json(orders);
       res.status(200).send({
        success:true,
        message: 'Order placed',
        orders
       })
    
  }catch(error){
    console.log(error)
    res.status(500).send({ 
      success:false,
      message: 'Error while getting orders',
      error
     })
  }
}




//orders
// export const getOrdersController =async()=>{
//   try{

//   }
//   catch(error){}
// }

