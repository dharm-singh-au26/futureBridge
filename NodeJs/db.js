const mongoose = require('mongoose')
// import { userSchema } from './src/model/user'
const userSchema = require('./src/model/user')

const connection = mongoose.createConnection('mongodb://localhost:27017/assignment',() => {
    console.log('database connected')
})

const User = connection.model('users',userSchema)

module.exports = User