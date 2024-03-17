import express from 'express'
import { isadmin, requireSignin } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deletecategoryController, singlecategoryController, updateCategoryController } from '../controllers/categoryController.js';
const router=express.Router();
//create route
router.post('/create-category',requireSignin,isadmin,createCategoryController);
export default router;
router.put('/update-category/:id',requireSignin,isadmin,updateCategoryController);
router.get('/get-category',categoryController);
//single Cateogries
router.get('/single-category/:slug',singlecategoryController);
router.delete('/delete-category/:id',requireSignin,isadmin, deletecategoryController);