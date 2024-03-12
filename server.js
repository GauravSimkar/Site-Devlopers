import express from 'express'; //require express
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js';


const app =express()  //app take module and property of express
dotenv.config();   // The config() is a method which is provided by the dotenv module to config the env files.(for securing files we use dotenv(environment)) 
//before using env  first clear the server
//database config or connect 
connectDB();

//middleware
app.use(express.json());  //jo meera data aa raaha hai usko jsomn object recognise karne ke lie we use express.json()
app.use(morgan('dev'));
app.use('/api/v1/auth',authRoutes);





const PORT=process.env.PORT||8000;
//rest api
app.get('/',(req,res)=>{
  res.send("<h1>welcome bhai<h1>"
  )
})
app.listen(PORT,()=>{
  console.log(`server running  on port ${PORT}`.bgCyan.white);
});