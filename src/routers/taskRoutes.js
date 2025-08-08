import { Router } from "express";
import { taskCreate, getTask, getTaskbyPK, taskUpdate, taskDelete } from "../controllers/taskControllers.js";

export const routerTask = Router();

routerTask.post("/api/tasks:",taskCreate)

routerTask.get("/api/tasks:",getTask)

routerTask.get("/api/tasks/:id:",getTaskbyPK)

routerTask.put("/api/tasks/:id",taskUpdate)

routerTask.delete("/api/tasks/:id",taskDelete)