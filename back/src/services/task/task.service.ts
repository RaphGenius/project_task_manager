import { TaskModel } from "@/models";
import { ITask, ITaskCreationAttributes } from "@/models/Task";
import { FindOptions } from "sequelize";

const findTaskById = async (id: number) => {
  const task = await TaskModel.findByPk(id);
  return task;
};

const findAllTasks = async (option?: FindOptions<ITask> | undefined) => {
  const tasks = await TaskModel.findAll(option);
  return tasks;
};

const createTask = async (task: ITaskCreationAttributes) => {
  const createdTask = await TaskModel.create(task);
  return createdTask;
};

const deleteTask = async (id: number) => {
  const deleteTask = await TaskModel.destroy({ where: { id } });
  return deleteTask;
};

const modifyTask = async (id: number, data: Partial<ITask>) => {
  const task = await findTaskById(id);
  if (!task) return null;
  const updatedTask = await task.update(data, {
    where: { id },
    returning: true,
  });
  return updatedTask;
};

export { findTaskById, findAllTasks, createTask, deleteTask, modifyTask };
