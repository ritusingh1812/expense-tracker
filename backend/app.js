const express=require('express')
const cors=require('cors');
const {db}=require('./db/db.js')
const {readdirSync}=require('fs')

const app=express()
require('dotenv').config()
const PORT=process.env.PORT

//middlewares
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  credentials: true // If needed
}))

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))

const server=()=>{
  db()
app.listen(PORT,()=>{
  console.log('listening to port ',PORT)
})
}
server()