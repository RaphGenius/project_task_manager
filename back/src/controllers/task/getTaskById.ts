import { findTaskById } from "@/services/task/task.service";
import { errorBody, succesBody } from "@/utils/response/responseformat";
import { Request, Response } from "express";

const getTaskById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  try {
    const task = await findTaskById(id);

    if (!task) {
      const message = "Aucune tâche trouvée.";
      res.status(404).json(errorBody(message));
      return;
    }

    const message = `La tâche n°${id} a été trouvé avec succès `;
    res.status(200).json(succesBody(message, task));
  } catch (error) {
    const message = `Erreur lors de la récupération de la tâche`;
    res.status(500).json(errorBody(message, error));
  }
};

export default getTaskById;
