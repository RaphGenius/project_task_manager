import UserModel from "./User";
import TaskModel from "./Task";

TaskModel.belongsTo(UserModel, { foreignKey: "assignedTo" });
UserModel.hasMany(TaskModel, { foreignKey: "assignedTo" });

// TaskModel.belongsToMany(UserModel, { through: TaskAssignment });
// UserModel.belongsToMany(TaskModel, { through: TaskAssignment });

export { UserModel, TaskModel };
