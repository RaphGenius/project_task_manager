import { Request, Response } from "express";
import { comparePassword } from "@utils/hash/hash";
import { jwtSign } from "@utils/jwt/jwt";
import { errorBody, succesBody } from "@utils/response/responseformat";
import { findUserByEmail } from "@/services/user/user.service";
import { cookieOptions } from "@/utils/cookies/cookies";

type Body = {
  email: string;
  password: string;
};

const login = async (req: Request<{}, {}, Body, {}>, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      res.status(404).json(errorBody("Aucune utilisateur trouvé."));
      return;
    }

    const isPasswordvalide = await comparePassword(password, user.password);

    if (!isPasswordvalide) {
      res.status(404).json(errorBody(`Aucun utilisateur trouvé.(password))`));
      return;
    }

    const token = jwtSign({ user_id: user.id, role: user.role });
    res.cookie("jwt", token, cookieOptions);

    const message = `L'utilisateur a été connecté avec succès`;
    res.json(succesBody(message, token));
  } catch (error) {
    const message = `Erreur serveur lors de la connexion. Veuillez réessayer plus tard`;
    res.status(500).json({ message, error });
  }
};

export default login;
