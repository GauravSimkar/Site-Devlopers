import mongoose from "mongoose";
import validator from "validator";
const userSchema=new mongoose.Schema(
  {
   name:{
    type:String,
    required:true,
    trim:true    //used when we want to remove the blank space 
   },
   email:{
     type:String,
     require:true,
     unique:[true,"Email id is already exists"],
     validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email")
      }
     }
   },
   password:{
    type:String,
    required:true,
   },
   phone:{
    type: String,
    required:true,
    unique:true
   },
   address:{
    type:String,
    required:true,
   },
   role:{
    type:Number,
    default:0,
  },

},
{
timestamps:true      //register time will add
})
//collection making
export default mongoose.model('users',userSchema);