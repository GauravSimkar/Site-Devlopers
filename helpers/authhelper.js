import bcrypt from 'bcrypt'

//user ka information lene ke baad we use hashing and then we save int to my data base
export const hashPassword =async (Password)=>{
  try{
    const saltRounds=10;  //With "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash. The higher the cost factor, the more hashing rounds are done. Increasing the cost factor by 1 doubles the necessary time. The more time is necessary, the more difficult is brute-forcing.
    const hashedPassword=await bcrypt.hash(Password,saltRounds);
    return hashedPassword;

  }
  catch(error){
    console.log(error);

  }
};
export const comparePassword = async (Password,hashedPassword)=>{
  return bcrypt.compare(Password,hashedPassword);
};