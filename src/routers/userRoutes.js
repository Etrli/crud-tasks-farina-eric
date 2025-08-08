import { Router } from "express";
import { getUser,getUserbyPK,updateUser,deleteUser,createUser } from "../controllers/userControllers.js";

export const routerUser = Router();

routerUser.post("/api/tasks:",createUser)

routerUser.get("/api/tasks:",getUser)

routerUser.get("/api/tasks/:id:",getUserbyPK)

routerUser.put("/api/tasks/:id",updateUser)

routerUser.delete("/api/tasks/:id",deleteUser)