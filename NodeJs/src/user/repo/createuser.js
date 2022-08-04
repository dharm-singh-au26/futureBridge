const User = require('../../../db')

 const createUser = async(user) => {
    return await User.create(user)
}

module.exports = createUser