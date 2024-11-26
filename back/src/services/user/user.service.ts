import { UserModel } from "@/models";
import { IUser, IUserBeforeCreation } from "@/models/User";

type UserLogin = Pick<IUser, "id" | "password" | "role">;

export const findUserByEmail = async (email: string) => {
  const user: UserLogin | null = await UserModel.findOne({
    where: { email },
    attributes: ["id", "password", "role"],
  });
  return user;
};

export const createUser = async (user: IUserBeforeCreation) => {
  const userCreated = await UserModel.create(user);
  return userCreated;
};
