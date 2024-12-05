import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import { errorBody } from "@/utils/response/responseformat";

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    res.status(401).json(errorBody("Pas de jwt"));
    return;
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCES_TOKEN_SECRET!, (err, decoded) => {
    if (err) {
      const { inner, message, name, stack } = err;
      console.log(err.name);
      res
        .status(401)
        .json(errorBody("jwt invalide.", { message, name, inner, stack }));
      return;
    }
    next();
  });
};

export default verifyJWT;
