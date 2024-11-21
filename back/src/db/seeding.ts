import { UserModel, TaskModel } from "../models";
import { hashPassword } from "../utils/hash/hash";
import { tasksMock } from "./mock/taskMock";
import { usersMock } from "./mock/userMock";
const seeding = async () => {
  try {
    const mockUsersWithHashPassword = await Promise.all(
      usersMock.map(async (user) => {
        return { ...user, password: await hashPassword(user.password) };
      })
    );

    await UserModel.bulkCreate(mockUsersWithHashPassword);
    console.log("Users seeder done");

    await TaskModel.bulkCreate(tasksMock);
    console.log("Tasks Seeder done");
  } catch (error) {
    console.log("error while seeding", error);
  }
};

export default seeding;
