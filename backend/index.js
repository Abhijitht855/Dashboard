import express from 'express'
import mongoose from 'mongoose'
import router from './routes/orderRoutes.js' 
import cors from 'cors'

const app=express()

const PORT=5000

const mongoDbUrl='mongodb://localhost:27017/FoodKo'

app.use(express.json())

app.use(cors())


app.get('/',(req,res)=>{
    console.log(req)
    return res.status(200).send('WELCOME')
})

app.use('/order',router)

mongoose.connect(mongoDbUrl)
.then(()=>{
    console.log("App connected to database")
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})



