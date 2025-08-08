import { Router } from "express";
import { taskCreate, getTask, getTaskbyPK, taskUpdate, taskDelete } from "../controllers/taskControllers.js";


export const router = Router();

router.post("/api/tasks:",taskCreate)

router.get("/api/tasks:",getTask)

router.get("/api/tasks/:id:",getTaskbyPK)

router.put("/api/tasks/:id",taskUpdate)

router.delete("/api/tasks/:id",taskDelete)