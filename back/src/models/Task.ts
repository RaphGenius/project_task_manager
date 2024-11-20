import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/sequelize";

const taskStatus = ["todo", "in_progress", "done", "canceled"] as const;
type TaskStatusType = (typeof taskStatus)[number];

export interface ITask {
  id: number;
  title: string;
  description?: string;
  status: TaskStatusType;
  assignedTo: number | null;
  dueDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ITaskCreationAttributes
  extends Optional<ITask, "id" | "status" | "description" | "dueDate"> {}

class Task extends Model<ITask, ITaskCreationAttributes> implements ITask {
  public id!: number;
  public title!: string;
  public description?: string;
  public status!: TaskStatusType;
  public dueDate?: Date;
  public assignedTo!: number | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le titre de la tâche ne peut pas être vide.",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(...taskStatus),
      allowNull: false,
      defaultValue: "todo",
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      defaultValue: null,
    },
  },
  {
    sequelize,
  }
);

export default Task;
