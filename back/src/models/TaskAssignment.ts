import { DataTypes, Model } from "sequelize";
import sequelize from ".././db/sequelize";

export interface ITaskAssignement {
  task_id: number;
  user_id: number;
}

class TaskAssignment extends Model {}

TaskAssignment.init(
  {},
  {
    sequelize,
    modelName: "task_user",
  }
);

export default TaskAssignment;
