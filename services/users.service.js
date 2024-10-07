import usersModel from "../models/users.model.js"

const getAllUsers = async () => {
    return usersModel.getAllUsers()
}

const postUsers = async (user) => {
    return usersModel.postUsers(user)
}

const patchUsers = async (id, user) => {
    return usersModel.patchUsers(id, user)
}

export default {
    getAllUsers,
    postUsers,
    patchUsers
}