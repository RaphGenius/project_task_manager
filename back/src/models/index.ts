import UserModel from "./User";
import TaskModel from "./Task";

TaskModel.belongsTo(UserModel, { foreignKey: "assignedTo" });
UserModel.hasMany(TaskModel, { foreignKey: "assignedTo" });

export { UserModel, TaskModel };
