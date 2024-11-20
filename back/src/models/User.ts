import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db/sequelize";

const role = ["user", "admin", "manager"] as const;
type RoleType = (typeof role)[number];

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  role: RoleType;
}

export interface IUserCreationAttributes extends Optional<IUser, "id"> {}

class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
  public password!: string;
  public email!: string;
  public role!: RoleType;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Veuillez indiquer une adresse mail valide.",
        },
        notNull: { msg: "Veuillez indiquer une adresse mail." },
      },
    },
    role: {
      type: DataTypes.ENUM(...role),
      defaultValue: "user",
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

export default User;
