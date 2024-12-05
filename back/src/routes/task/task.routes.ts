import createTask from "@/controllers/task/createNewTask";
import deleteTask from "@/controllers/task/destroyTask";
import getAllTasks from "@/controllers/task/getAllTasks";
import getTaskById from "@/controllers/task/getTaskById";
import updateTask from "@/controllers/task/updateTask";
import validateSchema from "@/middlewares/validationSchema";
import verifyJWT from "@/middlewares/verifyJWT";
import {
  createTaskSchema,
  idSchema,
  updateTaskSchema,
} from "@/validations/task";
import { Router } from "express";

const taskRoutes = Router();

taskRoutes.get(
  "/:id",

  validateSchema(idSchema, "params"),
  getTaskById
);
taskRoutes.get("/", getAllTasks);

taskRoutes.post("/", validateSchema(createTaskSchema), createTask);

taskRoutes.delete("/:id", validateSchema(idSchema, "params"), deleteTask);

taskRoutes.put(
  "/:id",
  validateSchema(idSchema, "params"),
  validateSchema(updateTaskSchema),
  updateTask
);

export default taskRoutes;
