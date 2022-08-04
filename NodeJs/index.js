// 'use strict';
const express = require('express')
const bodyParser = require('body-parser')
// const { userRoute } = require('./src/user/route')
// import { userRoute } from './src/user/route'
const userRoute = require('./src/user/route')

const PORT = 3000
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log('server started')
})

