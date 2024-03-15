import express from 'express'
import{ isadmin, requireSignin} from '../middlewares/authMiddleware.js'
import { createProductcontroller, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductcontroller } from '../controllers/productController.js'
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
    router.get('/get-product',getProductController);

    // single product
    router.get('/get-product/:slug',getSingleProductController);

    // get photo
    router.get('/product-photo/:pid',productPhotoController);

    // delete product
    router.delete('/products',deleteProductController);

export default router;