import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } from "../controllers/users.controllers.js"
import { validateInformation } from "../middlewares/users.middlewares.js"
import{authenticateUser} from "../middlewares/auth.middleware.js"

const router = Router();
router.get("/",getAllUsers)
router.get("/:id",authenticateUser,getUserById)
router.post("/" ,validateInformation,createUser) 
router.patch("/:id",authenticateUser,updateUser )
router.delete("/:id",authenticateUser, deleteUser)
router.post("/login",loginUser)//create user and token { userId and autherId}




export default router;