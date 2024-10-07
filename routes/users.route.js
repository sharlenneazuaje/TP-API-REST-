import usersController from "../controllers/users.controller.js"
import express from "express"


const router = express.Router()

router.get("/users",usersController.getAllUsers)
router.post("/users", usersController.postUsers)
router.patch("/users/update/:id", usersController.patchUsers)


export default router