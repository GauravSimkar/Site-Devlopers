import productModel from "../models/productModel.js";
import fs from 'fs'
import slugify from 'slugify'
import categoryModel from "../models/categoryModel.js";
import braintree from "braintree";
import ordermodel from "../models/ordermodel.js";
import dotenv from "dotenv";

dotenv.config();

//payment gateway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});


export const createProductcontroller =async(req,res)=>{
    try {
        const {name, slug,description,price,category,quantity,shipping} = req.fields
        const{photo}=req.files
    //   validation
       switch (true) {
        case !name:
            return res.status(500).send({error:"Name is Required"});
         
            case !description:
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
        products.photo.data=fs.readFileSync(photo.path)
        products.photo.contentType=photo.type
       } 
       await products.save()
     res.status(201).send({
        succes:true,
        message:"product created successfully",
        products
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
     const products = await productModel.find({}).populate("category").select('-photo').limit(12).sort({ceatedAt:-1})
     res.status(200).send({
        success:true,
        countTotal:products.length,
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
/*export const getSingleProductController=async(req,res)=>{
       try {
        const product =await productModel.findOne({slug:req.params.slug}).select('-photo').populate("category")
        res.status(200).send({
            success:true,
            message:'ALIProducts',
            product,
          })
       } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in getting product',
            error:error
        }); 

       }
}*/

export const getSingleProductController = async (req, res) => {
    try {
      const product = await productModel.findOne({ slug: req.params.slug }).select('-photo').populate("category");
  
      if (!product) {
        return res.status(404).send({
          success: false,
          message: 'Product not found',
        });
      }
  
      res.status(200).send({
        success: true,
        message: 'Product found',
        product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: 'Error in getting product',
        error: error.message,
      });
    }
  };
  


// getting photo
export const productPhotoController = async(req,res) => {
    try {
   const  product =await productModel.findById(req.params.pid).select("photo")
   if(product.photo.data){
    res.set('Content-type',product.photo.contentType);
    return res.status(200).send(product.photo.data);
   }
      
        
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
        await productModel.findByIdAndDelete(req.params.pid).select('-photo')
        res.status(200).send({
            success:true,
            message:'product successfully deleted',
           
          })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in deleting product',
            error,
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
         
            case !description:
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
        message:"product updated successfully",
        products,  
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
//filter
export const productFiltersController=async(req,res)=>{
    try{
        const {checked, radio}=req.body;
         let args={};
        if(checked.length>0){
            args.category=checked;  //jo cateogry select kie woh arg me oobject ban ke aajaega        
        // }
        // const{shoes}=req.body;
        // args.category=shoes;

      if(radio.length){
        args.price={$gte:radio[0],$lte:radio[1]};   //we find the price from the the selected cateoogry
      }
      const products=await productModel.find(args);//postman run
      res.status(200).send({
        success:true,
        products,
      })
    
    }
}
    catch(error){
        console.log(error)
        res.status(400).send({ //the server cannot or will not process the request due to something that is perceived to be a client error
            success:false,
            error,
            message:"error in filter the product"
        })
    }

}
    //productcount
    export const productcountController=async(req,res)=>{
             try{
               const total=await productModel.find({}).estimatedDocumentCount();
               res.status(200).send({
            success:true,
            total,
               })
             }
      catch(error){
        console.log(error)
        res.status(400).send({ //the server cannot or will not process the request due to something that is perceived to be a client error
            success:false,
            error,
            message:"error in filter the product"
        })
    }
      }
    //product list
    export const productlistController=async(req,res)=>{
        
        try{
          //logic to productlist  
          const perPage=6;
          const page=req.params.page?req.params.page:1
          const products=await productModel.find(({})).select('-photo').skip((page-1)*perPage).limit(perPage).sort({createdAt:-1});
          res.status(200).send({
            success:true,
            products,

          })
        }
     catch(error){
        Console.log(error)
        res.status(400).send({
            success:false,
            error,
            message:"error in product list"

        })
     }

    }
    //search product controller
    export const searchProductController=async(req,res)=>{
        try{
            //logic
            const {keyword}=req.params;  
            const results=await productModel.find({
                $or:[
                    {name:{$regex: keyword, $options:"i"}},/*<field>: This should be replaced with the name of the field in your MongoDB collection that you want to perform the regex query on.
                    "pattern": This is the regular expression pattern you want to match against the field's value.
                    <options>: This should be replaced with the options for the regex search. Common options include:
                    "i": Perform case-insensitive matching.*/
                    {description:{$regex:keyword,$options:"i"}},

                ],
            })
            .select("-photo");
            console.log(results);
            res.json(results);

        }
        catch(error){
            console.log(error);
         res.status(400).send({
             success:false,
             error,
             message:"error in searching product API"
         })
        }
    }
   // search related product
    export const relatedProductController=async(req,res)=>{
        try{
            const {pid,cid}=req.params
        const products= await productModel.find({
            category:cid,
            _id:{$ne:pid},   //woh product simisr me nhi dikhae
        }).select("-photo").limit(5).populate("category");
        res.status(200).send({
            success:true,
            products,
        });

        }
        catch(error){
            console.log(error);
            res.status(400).send({
                success:false,
                error,
                message:"error while getting related product"
            })
        }
    }
    //product when category 
    export const  productcategoryController=async(req,res)=>{
        try{
      const category=await categoryModel.findOne({slug:req.params.slug}); 
      console.log(categoryproduct);
      const products=await productModel.find({ category }).populate('category');
      res.status(200).send({
         success:true,
         category,
         products
      })
        }
        catch(error){
            console.log(error);
            res.status(400).send({
                success:false,
                error,
                message:"error while getting product with this category"
            })

        }
    }
//token from braintree
//callback function
export const braintreetokenController=async(req,res)=>{
    try{
        gateway.clientToken.generate({},function(err,response){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.send(response);
            }
        });

    }
    catch(error){
      console.log(error);
    }

}
//payment gateway api
export const braintreepaymentController=async(req,res)=>{
    try {
 const {cart,nonce}=req.body;   //braintree ka khud ka api hai
 
 let total=0;
 cart.map((i)=>{  //rupee calculated
 total+=i.price;
});
let newTransaction =gateway.transaction.sale({
    amount:total,
    PaymentMethodNonce:nonce,
    options:{
        submitForSettlement:true,
    }
},
function(error,result){
    if(result){
        const order= new ordermodel({
   products:cart,
   payment:result,
   buyer: req.user._id
}).save()
res.json({ok:true}) 
}
else{
    res.status(500).send(error)
}
}
)
  } catch (error) {
    console.log(error); 
    }

}
    //order status
    export  const orderStatusController =async (req,res)=>{
        try{
            const {orderId} =req.params; 
            const { status } =req.body
            const orders=await ordermodel.findByIdAndUpdate(orderId,{status},{new:true});
            res.json(orders);

     
        }
        catch(error){
            res.status(500).send({
           success:false,
           message:"Error while updating the order"
            });

        }
    }




