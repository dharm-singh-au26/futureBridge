const User = require('../../../db')

const getUser = async(user) =>{
    return await User.find({...user})
}


module.exports = getUser