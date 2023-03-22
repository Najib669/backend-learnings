const express = require('express')
const app = express()
require('dotenv').config()
const connectDB=require("./config/connectDB")
connectDB()

// app.get('/foufou', (req, res) => res.send('Hello rabbousha!'))
app.use(express.json())
app.use('/', require('./Routes/userRoutes'))
app.use ('/products' , require ('./Routes/productRoutes'))
app.use ('/orders' , require ('./Routes/orderRoutes') )


const port  = process.env.PORT
app.listen(port,(err) => {
    err? console.log(err): console.log("server is running");
})
