import express from "express"
import usersRoutes from "./routes/users.route.js"

const PORT = 8080
const app = express()

app.use(express.urlencoded({extended:true})) 
app.use(express.json())

app.use("/", usersRoutes)

app.listen(PORT, () => {console.log("Server running")})
app.on("Error", (err) => {console.log("Ha ocurrido un error en el servidor: ", err)})