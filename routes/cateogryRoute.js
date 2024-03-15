import express from 'express'
import { isadmin, requireSignin } from '../middlewares/authMiddleware.js';
import { cateogryController, createCateogryController, deletecateogryController, singlecateogryController, updateCateogryController } from '../controllers/cateogryController.js';
const router=express.Router();
//create route
router.post('/create-cateogry',requireSignin,isadmin,createCateogryController);
export default router;
router.put('/update-cateogry/:id',requireSignin,isadmin,updateCateogryController);
router.get('/get-cateogry',cateogryController);
//single Cateogries
router.get('/single-cateogry/:slug',singlecateogryController);
router.delete('/delete-cateogry/:id',requireSignin,isadmin, deletecateogryController);