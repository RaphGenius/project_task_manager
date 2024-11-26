import { Request, Response } from "express";
import { deleteTask } from "@services/task/task.service";
import { errorBody, succesBody } from "@/utils/response/responseformat";
const destroyTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const deletedTask = await deleteTask(id);
    if (deletedTask === 0) {
      const message = "Cette tâche n'existe pas.";
      res.status(404).json(errorBody(message));
      return;
    }
    const message = `La tâche n°${id} a été supprimé avec succès.`;
    res.json(succesBody(message));
  } catch (error) {}
};

export default destroyTask;
