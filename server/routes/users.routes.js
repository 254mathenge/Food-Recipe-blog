import { Router } from "express";
import { createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } from "../controllers/users.controllers.js"
import { validateInformation } from "../middlewares/users.middlewares.js"

const router = Router();
router.get("/", getAllUsers)
router.get("/:id",getUserById)
router.post("/",createUser ,validateInformation)
router.patch("/:id",updateUser )
router.delete("/:id", deleteUser)
router.post("/login",loginUser)




export default router;