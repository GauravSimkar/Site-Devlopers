import express from 'express'
import{ isadmin, requireSignin} from '../middlewares/authMiddleware.js'
import { brainTreePaymentController, braintreeTokenController, createProductcontroller, deleteProductController, getProductController, getSingleProductController, orderStatusController, productFiltersController, productPhotoController, productcategoryController, productcountController, productlistController, relatedProductController, searchProductController, updateProductcontroller } from '../controllers/productController.js'
import formidable from 'express-formidable'


const router=express.Router()

router.post(
    '/create-product',
    requireSignin,
    formidable(),
    isadmin,
    createProductcontroller);


    router.put(
        '/update-product/:pid',
        requireSignin,
        isadmin,
        formidable(),
       
        updateProductcontroller);

    // get products
    router.get('/getmyproduct',getProductController);

    // single product
    router.get('/get-product/:slug',getSingleProductController);

    // get photo
    router.get('/product-photo/:pid',productPhotoController);

    // delete product
    router.delete('/delete-product/:pid',deleteProductController);

    router.post('/filter-product',productFiltersController);
    router.get('/product-count',productcountController);
    router.get('/product-list/:page',productlistController);
    router.get('/search/:keyword',searchProductController);
   // similar product
    router.get('/related-product/:pid/:cid',relatedProductController)    //first  product per click karne ke baad uske  id with cateogry id us cateogry ke ke jaisa jo product hoga woh show hoga
    router.get('/product-category/:slug',productcategoryController);

  
  //token for account verification
   router.get('/braintree/token',braintreeTokenController);
  //payment routes 
  router.post('/braintree/payment',requireSignin,brainTreePaymentController)

router.put('/order-status/:orderId',requireSignin,isadmin,orderStatusController);


export default router;