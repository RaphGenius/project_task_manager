import { Request, Response } from "express";
import { createTask } from "@services/task/task.service";
import { errorBody, succesBody } from "@/utils/response/responseformat";

const createNewTask = async (req: Request, res: Response) => {
  try {
    const task = await createTask(req.body);
    const message = "La tâche a bien été créée.";

    res.status(200).json(succesBody(message, task));
  } catch (error) {
    const message = `Error lors de la création d"une tâche.`;
    res.status(500).json(errorBody(message, error));
  }
};

export default createNewTask;
