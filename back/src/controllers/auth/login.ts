import { Request, Response } from "express";
import { comparePassword } from "@utils/hash/hash";
import { generateRefreshToken, generateAccessToken } from "@utils/jwt/jwt";
import { errorBody, succesBody } from "@utils/response/responseformat";
import { findUserByEmail } from "@/services/user/user.service";
import { REFRESH_TOKEN_COOKIE_OPTION } from "@/utils/cookies/cookies";
import { REFRESH_TOKEN_NAME } from "@/config/jwt";

type Body = {
  email: string;
  password: string;
};

const login = async (req: Request<{}, {}, Body, {}>, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email, undefined, "withPassword");

    if (!user) {
      res.status(404).json(errorBody("Aucune utilisateur trouvé."));
      return;
    }

    const isPasswordvalide = await comparePassword(password, user.password);

    if (!isPasswordvalide) {
      res.status(404).json(errorBody(`Aucun utilisateur trouvé.(password))`));
      return;
    }

    const accessToken = generateAccessToken({});
    const refreshToken = generateRefreshToken({});

    res
      .cookie(REFRESH_TOKEN_NAME, refreshToken, REFRESH_TOKEN_COOKIE_OPTION)
      .json(succesBody("OK", undefined, { accessToken }));
  } catch (error) {
    const message = `Erreur serveur lors de la connexion. Veuillez réessayer plus tard`;
    res.status(500).json({ message, error });
  }
};

export default login;
