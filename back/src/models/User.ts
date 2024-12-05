import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "@config/database/sequelize";

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

export interface IUserBeforeCreation extends Optional<IUser, "id"> {}

class User extends Model<IUser, IUserBeforeCreation> implements IUser {
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
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: {
        attributes: { exclude: [] },
      },
    },
    hooks: {
      afterCreate(user: Partial<User>, _) {
        (user as Partial<User>).password = undefined;
      },
    },
  }
);

export default User;
