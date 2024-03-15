import express from 'express';
import { registerController,loginController, testControllers, forgatPasswordController } from "../controllers/authController.js";
import { isadmin, requireSignin } from './../middlewares/authMiddleware.js';


//router object (it serve for every thing we need)
const router=express.Router();
router.post("/register",registerController);  //by using exprees we make route
router.post("/login",loginController);
router.get("/forget-password",forgatPasswordController)
router.get("/test", requireSignin,isadmin,testControllers);
//protected route auth
router.get('./user-auth',requireSignin,(req,res)=>{
  res.status(200).send({ok:true});
})
////admin protected route
router.get('./admin-auth',requireSignin,isadmin,(req,res)=>{
  res.status(200).send({ok:true});
})
export default router;  
