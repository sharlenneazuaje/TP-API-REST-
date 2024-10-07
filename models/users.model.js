import fs from "fs";

const getAllUsers = async () => {
    try{
        const file = await fs.promises.readFile("users.txt","utf-8")
        const users = JSON.parse(file)
        return users
    }catch(error){
        console.error("Error al obtener la información", error)
        return "Error al obtener los usuarios"
    }
}

const postUsers = async (user) => {
    try {
        const file = await fs.promises.readFile("users.txt", "utf-8")
        const users = JSON.parse(file) // Convierte el contenido JSON en un array de objetos

        user.id = users[users.length - 1].id + 1
        
        users.push(user)

        const updatedData = JSON.stringify(users, null, 2)  // Convierte el array a JSON nuevamente
        await fs.promises.writeFile("users.txt", updatedData, "utf-8")

        console.log("Usuario agregado correctamente.")
        return user
    } catch (error) {
        console.error("Error al agregar el usuario", error);
        return "Error al agregar el usuario"
    }
}

const patchUsers = async (id, data) =>{
    try{
        const file = await fs.promises.readFile("users.txt", "utf-8")
        const users = JSON.parse(file)
        const index = users.findIndex((e) => e.id == id)
        const newUser = {...users[index], ...data}
        users.splice(index, 1, newUser)
        const updatedData = JSON.stringify(users, null, 2)
        await fs.promises.writeFile("users.txt", updatedData, "utf-8")
    
        return "Actualización parcial completa"
    }catch(error){
        console.error("Error al actualizar el usuario", error);
        return "Error al actualizar el usuario"
    }

}

export default{
    getAllUsers,
    postUsers,
    patchUsers
}