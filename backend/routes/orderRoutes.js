import express from 'express'
import { Order } from '../model/orderModel.js'

const router = express.Router()


router.post('/', async(req,res)=>{
    try{
       if( 
        !req.body.customerName ||
        !req.body.productName ||
        !req.body.price ||
        !req.body.quantity ||
        !req.body.location ||
        !req.body.status 
        // !req.body.date

        
       ) {
        return res.status(400).send({
            message:"send all required fields:customerName,productName,price,quantity,location,status,date"
        })
      
       }
       const newOrder={
        customerName: req.body.customerName,
        productName: req.body.productName,
        price: req.body.price,
        quantity: req.body.quantity,
        location: req.body.location,
        status: req.body.status,
        date: req.body.date,


    }
       const order=await Order.create(newOrder)

       return res.status(201).send(order)
    }catch (err) {
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})

router.get('/',async(req,res)=>{
    try{
        const order=await Order.find({})
        return res.status(200).json({
            count:order.length,
            data:order
        })
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const order=await Order.findById(id)
        return res.status(200).json(order)
    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})

router.put('/:id',async(req,res)=>{
    try{if( 
        !req.body.customerName ||
        !req.body.productName ||
        !req.body.price ||
        !req.body.quantity ||
        !req.body.location ||
        !req.body.status 
       ) { return res.status(400).send({
        message:"send all required fields:customerName,productName,price,quantity,location,status,date"
    })}
    const {id}=req.params

    const result=await Order.findByIdAndUpdate(id,req.body )

    if(!result){
        return res.status(404).json({message:'Order not fount'})
    }

    return res.status(200).send({message:'Order updated successfully'})

    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const result=await Order.findByIdAndDelete(id)

        if(!result){
            return res.status(404).json({message:'Order not fount'})
        }

        return res.status(200).send({message:'Order deleted successfully'})
    

    }catch(err){
        console.log(err.message);
        res.status(500).send({message:err.message})
    }
})


export default router