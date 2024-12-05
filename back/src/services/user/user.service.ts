import { UserModel } from "@/models";
import { IUser, IUserBeforeCreation } from "@/models/User";
import { FindOptions } from "sequelize";

export const findUserByEmail = async (
  email: string,
  options?: FindOptions<IUser>,
  scope?: string
) => {
  const UserModelScoped = scope ? UserModel.scope(scope) : UserModel;
  const user = await UserModelScoped.findOne({
    where: { email },
    ...options,
  });
  return user;
};

export const createUser = async (user: IUserBeforeCreation) => {
  const userCreated = await UserModel.create(user);
  return userCreated;
};
