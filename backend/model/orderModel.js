import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    // orderId: {
    //         type:String,
    //         required:true,
    //     },
    customerName: {
        type:String,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    date: { type: Date, required:true, default: Date.now }
});

export const Order = mongoose.model('Order', orderSchema);