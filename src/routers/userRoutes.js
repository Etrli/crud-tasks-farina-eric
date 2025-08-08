import { Router } from "express";
import { getUser,getUserbyPK,updateUser,deleteUser,createUser } from "../controllers/userControllers.js";

export const router = Router();

router.post("/api/tasks:",createUser)

router.get("/api/tasks:",getUser)

router.get("/api/tasks/:id:",getUserbyPK)

router.put("/api/tasks/:id",updateUser)

router.delete("/api/tasks/:id",deleteUser)