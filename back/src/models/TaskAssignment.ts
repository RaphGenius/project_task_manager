import { DataTypes, Model } from "sequelize";
import sequelize from ".././db/sequelize";

class TaskAssignment extends Model {}

TaskAssignment.init(
  {
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tasks",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "task_assignment",
    tableName: "task_assignments",
  }
);

export default TaskAssignment;
