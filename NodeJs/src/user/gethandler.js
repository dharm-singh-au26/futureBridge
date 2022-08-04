const getUser = require('./repo/getuser')


const getUserHandler = async(user)=>{
    return getUser(user)

}

module.exports = getUserHandler