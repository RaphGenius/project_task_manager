import { findAllTasks } from "@/services/task/task.service";
import { errorBody, succesBody } from "@/utils/response/responseformat";
import { Request, Response } from "express";
import { InstanceError } from "sequelize";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await findAllTasks();

    if (!tasks || tasks.length < 1) {
      const message = "Aucune tâche n'a pu être trouvée.";
      res.status(404).json(message);
      return;
    }
    const message = "Taches trouvée avec succès.";
    res.status(200).json(succesBody(message, tasks));
  } catch (error) {
    const err = error as unknown as InstanceError;

    const message = `Erreur dans la récupération des tâches.`;
    res.status(500).json(errorBody(message, err.message, err.name));
  }
};

export default getAllTasks;
