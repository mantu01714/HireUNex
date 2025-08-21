import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
 
//initalize express

const app=express()

//connect to db
await connectDB();
//middware
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>res.send("API working"))

app.get("/debug-sentry",function mainHandler(req,res){
    throw new Error("my first sentry error!");
});

app.post('/webhooks',clerkWebhooks)


//port
const PORT=process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app); 

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
 })