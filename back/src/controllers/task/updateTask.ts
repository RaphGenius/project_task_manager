import { ITask } from "@/models/Task";
import { modifyTask } from "@/services/task/task.service";
import { errorBody, succesBody } from "@/utils/response/responseformat";
import { Request, Response } from "express";

const updateTask = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;

  try {
    const taskUpdated = await modifyTask(id, data);
    if (!taskUpdated) {
      const message = `Aucune tâche n'a été trouvé avec cet identifiant.`;
      res.status(404).json(errorBody(message));
      return;
    }
    const message = `La tâche n°${id} a bien été modifié.`;
    res.json(succesBody(message, taskUpdated));
  } catch (error) {
    const message = `Erreur lors de la mise à jour de la tâche`;
    res.status(500).json(errorBody(message, error));
  }
};

export default updateTask;
