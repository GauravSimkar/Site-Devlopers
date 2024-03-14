import express from 'express'
import{ isadmin, requireSignin} from '../middlewares/authMiddleware.js'
import { createProductcontroller, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductcontroller } from '../controllers/productController.js'
import formidable from 'express-formidable'

const router=express.Router()

router.post(
    './create-product',
    isadmin,
    formidable(),
    requireSignin,
    createProductcontroller);


    router.post(
        './update-product/:pid',
        isadmin,
        formidable(),
        requireSignin,
        updateProductcontroller);

    // get products
    router.get('/get-product',getProductController);

    // single product
    router.get('/get-product/:slug',getSingleProductController);

    // get photo
    router.get('/product-photo/:pid',productPhotoController);

    // delete product
    router.delete('/product',deleteProductController);

export default router;