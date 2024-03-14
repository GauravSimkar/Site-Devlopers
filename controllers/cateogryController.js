import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCateogryController=async(req,res)=>{
  try{
   const {name}=req.body;
   if(!name){
    return res.status(401).send({message:'Name is required'});

   }
   const existingCateogry=await categoryModel.findOne({name});
   if(existingCateogry){
    return res.status(200).send({
      sucess:true,
      message:'Cateogry Already Exists',
      
    })
  }
  const cateogry=await new categoryModel({name,slug:slugify(name)}).save()
  
  res.status(201).send({

    sucess:true,
    message:'New cateogry added',
    cateogry,
  
  })
  }
  catch(error){
    console.log(error)
   res.status(500).send({
    success:false,
    message:'Error in cateogry',
    error,

   })
  }
}
//updatecateogry
export const updateCateogryController=async(req,res)=>{
try{
  const {name}=req.body;
  const {id}=req.params;  //getting from url
  const cateogry=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)}, {new:true});
  res.status(200).send({
    success:true,
    message:"Successfully Updated",
    cateogry,
  });


}
catch(error){
  console.log(error)
  res.status(500).send({
   success:false,
   message:'Error in Updating Cateogry',
   error,

})
}
}
///get cateogry
export const cateogryController=async(req,res)=>{
  try{
    const cateogry=await categoryModel.find({});
    res.status(200).send({
      success:true,
      message:"All cateogies List",
      cateogry
    })

  }
  catch(error){
    console.log(error)
  res.status(500).send({
   success:false,
   message:'Error while gettong Cateogry',
   error,

})

  }

}
//single cateogry
export const  singlecateogryController=async(req,res)=>{
  try{
    
    const cateogry =await categoryModel.findOne({slug:req.params.slug});
    res.status(200).send({
      success:true,
      message:"A cateogies",
      cateogry
    })


  }
  catch(error){
    console.log(error)
  res.status(500).send({
   success:false,
   message:'Error while gettong  single Cateogry',
   error,

})

  }

}

//delete controller
export const  deletecateogryController=async(req,res)=>{
  try{
    const {id}=req.params
  await categoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message:" successfully Deleted",
    
    })


  }
  catch(error){
    console.log(error)
  res.status(500).send({
   success:false,
   message:'Error while deleting cateogrey',
   error,

})

  }

}