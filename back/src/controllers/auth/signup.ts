import { Request, Response } from "express";
import { IUser, IUserBeforeCreation } from "@/models/User";
import { hashPassword } from "@/utils/hash/hash";
import { errorBody, succesBody } from "@/utils/response/responseformat";
import { createUser, findUserByEmail } from "@/services/user/user.service";

interface Body
  extends Pick<IUser, "email" | "firstname" | "lastname" | "password"> {}

const signup = async (req: Request<{}, {}, Body, {}>, res: Response) => {
  const { email, password } = req.body;

  try {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      res.status(401).json(errorBody("Cette adresse mail est déjà utilisé."));
      return;
    }

    const userPayload: IUserBeforeCreation = {
      ...req.body,
      role: "user",
      password: await hashPassword(password),
    };

    const user = await createUser(userPayload);

    res
      .status(200)
      .json(succesBody("Succès lors de la création de l'utilisateur", user));
  } catch (error) {
    res
      .status(500)
      .json(errorBody("Erreur lors de la création d'un utilisateur", error));
  }
};

export default signup;
