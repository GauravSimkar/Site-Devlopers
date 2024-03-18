import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
 products:[
  {
    type: mongoose.ObjectId,
     ref:'products',   //made connection with products
}
],
payment:{},
buyer:{
type: mongoose.ObjectId,
ref:'users'
},
status:{
   type:String,
   default:'Not Process',
  enum:["Not Process","Processing","Shipped","deliverd","cancel"], //select box
}
},
{timestamps:true}
);
export default mongoose.model("Order",orderSchema);
//The {timestamps: true} option in Mongoose schema configuration automatically adds two fields to the schema: createdAt and updatedAt. These fields are automatically managed by Mongoose.
//With this setup, whenever a new document is created in the collection associated with this schema, Mongoose will automatically add a createdAt field with the timestamp of when the document was created. Additionally, whenever a document is updated, Mongoose will update the updatedAt field with the timestamp of the update