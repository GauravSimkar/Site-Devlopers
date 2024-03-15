import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.ObjectId,
        ref:'Cateogry', //necessary when we select a category the product should be shown
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    photo:{
        data:Buffer,   //we can store temporary photos using buffer
        contentType:String
    },
    shipping:{
        type:Boolean,
    }

},{timeStamps:true}
);

export default mongoose.model("Products",productSchema);