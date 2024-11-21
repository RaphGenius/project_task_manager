import express, {
  NextFunction,
  Response,
  Request,
  RequestHandler,
} from "express";
import login from "./auth/login";

const authRoutes = express.Router();

authRoutes.post("/login", login);

export default authRoutes;
