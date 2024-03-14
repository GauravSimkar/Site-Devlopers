import productModel from "../models/productModel.js";
import fs from 'fs'
import slugify from 'slugify'


export const createProductcontroller =async(req,res)=>{
    try {
        const {name, slug,description,price,category,quantity,shipping} = req.fields
        const{photo}=req.files
    //   validation
       switch (true) {
        case !name:
            return res.status(500).send({error:"Name is Required"});
         
            case !Description:
                return res.status(500).send({error:"Description is Required"})
                case !price:
                    return res.status(500).send({error:"price is Required"})
                    case !category:
                        return res.status(500).send({error:"category is Required"})
                        case !quantity:
                            return res.status(500).send({error:"quantity is Required"}) 
          case photo && photo.size>1000000:
            return res
            .status(500)
            .send({error:"photo is Required and should be less than 1mb"})
       }
        
        const products=new productModel({...req.fields,slug:slugify(name)})
       if(photo){
        products.photo.data=fs.readFilesync(photo.path)
        products.photo.contentType=photo.type
       }
     await products.save()
     res.status(201).send({
        succes:true,
        message:"product created successfully"
     })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product'
        })
    }
};

// getting products
export const getProductController=async(req,res)=>{
  try {
     const products = await productModel.find({}).populate("category").select('-photo').limit(20).sort({ceatedAt:-1})
     res.status(200).send({
        success:true,
        message:'ALIProducts',
        products,
      })
    
  } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:'Error in getting products',
        error:error.message
    });
  }
};

// getting single product
export const getSingleProductController=async(req,res)=>{
       try {
        const product =await productModel.findOne({slug:req.params.slug}).select('-photo').populate("category")
        res.status(200).send({
            success:true,
            message:'ALIProducts',
            products,
          })
       } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting product',
            error:error
        }); 

       }
}

// getting photo
export const productPhotoController = async(req,res) => {
    try {
   const  product =await productModel.findById(req.params.pid).select("photo")
   if(product.photo.data){
    res.set('Content-type',product.photo,contentType);
    return res.status(200).send(product.photo.data);
   }
        res.status(200).send({
            success:true,
            message:'ALIProducts',
            products,
          })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting photo',
            error:error
        }); 
    }
}


export const deleteProductController =async(req,res)=>{
    try {
        await productModel.findByIdAndDelete(req.params.pid),select("-photo")
        res.status(200).send({
            success:true,
            message:'product successfully deleted',
           
          })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in deleting product',
            error:error
        }); 
    }
}


// update product
export const updateProductcontroller=async(req,res)=>{
    try {
        const {name, slug,description,price,category,quantity,shipping} = req.fields
        const{photo}=req.files
    //   validation
       switch (true) {
        case !name:
            return res.status(500).send({error:"Name is Required"});
         
            case !Description:
                return res.status(500).send({error:"Description is Required"})
                case !price:
                    return res.status(500).send({error:"price is Required"})
                    case !category:
                        return res.status(500).send({error:"category is Required"})
                        case !quantity:
                            return res.status(500).send({error:"quantity is Required"}) 
          case photo && photo.size>1000000:
            return res
            .status(500)
            .send({error:"photo is Required and should be less than 1mb"})
       }
        
        const products=await  productModel.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true}) 
       if(photo){
        products.photo.data=fs.readFilesync(photo.path)
        products.photo.contentType=photo.type
       }
     await products.save()
     res.status(201).send({
        succes:true,
        message:"product updated successfully"
     })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in update product'
        })
    }
}