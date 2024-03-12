import express from 'express';
import { registerController,loginController, testControllers } from "../controllers/authController.js";
import { isadmin, requireSignin } from './../middlewares/authMiddleware.js';


//router object (it serve for every thing we need)
const router=express.Router();
router.post("/register",registerController);  //by using exprees we make route
router.post("/login",loginController);
router.get("/test", requireSignin,isadmin,testControllers);
export default router;  