import { Request, RequestHandler, Response, NextFunction } from "express";
import { UserModel } from "../../models";
import { comparePassword } from "../../utils/hash/hash";
import { jwtSign } from "../../utils/jwt/jwt";
import { errorBody, succesBody } from "../../utils/response/responseformat";

type Body = {
  email: string;
  password: string;
};

const login = async (req: Request<{}, {}, Body, {}>, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({
      where: { email },
      attributes: ["id", "password"],
    });

    if (!user) {
      res.status(404).json(errorBody("Aucune utilisateur trouvé."));
      return;
    }

    const isPasswordvali = await comparePassword(password, user.password);

    if (!isPasswordvali) {
      res.status(404).json(errorBody(`Aucun utilisateur trouvé.(password))`));
      return;
    }

    const token = jwtSign({ user_id: user.id, role: user.role });

    res.cookie("jwt", token, {
      httpOnly: true, // Le cookie n'est pas accessible via JavaScript côté client
      secure: false, // `false` pour le développement (mettre `true` en production avec HTTPS)
      sameSite: "lax", // `Lax` ou `Strict` pour limiter les requêtes cross-origin
      domain: "localhost",
      path: "/",
    });

    const message = `L'utilisateur a été connecté avec succès`;
    res.json(succesBody(message, token));
  } catch (error) {
    const message = `Erreur serveur lors de la connexion. Veuillez réessayer plus tard`;
    res.status(500).json({ message, error });
  }
};

export default login;
