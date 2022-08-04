
const express = require('express');
const userHandler = require('./posthandler')
const getUserHandler = require('./gethandler')

const Router = express.Router()

Router.post('/post',async(req,res)=>{
    try {
        const {name,email} = req.body;
        const result = await userHandler({name,email})

        res.send(result)

    } catch (error) {
        console.log(error)
    }

}
)

Router.get('/get',async(req,res) =>{

    try {
        const result = await getUserHandler()

        res.send(result)
    } catch (error) {
        console.log(error)
        
    }

})


const userRoute = Router;

module.exports = userRoute