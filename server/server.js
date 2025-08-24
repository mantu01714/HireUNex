import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import conectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express';

 
//initalize express

const app=express()



//connect to db
await connectDB();

await conectCloudinary()
//middware
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/',(req,res)=>res.send("API working"))

app.get("/debug-sentry",function mainHandler(req,res){
    throw new Error("my first sentry error!");
});

app.post('/webhooks',clerkWebhooks)
app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users',userRoutes)


//port
const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app); 

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
 })