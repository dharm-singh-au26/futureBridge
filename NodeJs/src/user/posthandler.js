// import { createUser } from "./repo";
const createUser = require('./repo/createuser')

const userHandler = async(user) =>{
    const newUser = {
        name : user.name,
        email:user.email
    }
    const saveInDB = await createUser(newUser)

    return saveInDB
}


module.exports = userHandler
// module.exports = userHandler
