import express, { Request, Response, NextFunction } from "express";
import { login, signup } from "@controllers/auth";
import { loginValidationRules } from "@/validations/auth";

const authRoutes = express.Router();

authRoutes.post("/login", ...loginValidationRules, login);
authRoutes.post("/signup", signup);

export default authRoutes;
