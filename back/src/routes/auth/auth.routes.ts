import express from "express";
import { login, logout, signup, refresh } from "@controllers/auth";
import { loginSchema, signupSchema } from "@/validations/auth";
import validateSchema from "@/middlewares/validationSchema";

const authRoutes = express.Router();

authRoutes.post("/login", validateSchema(loginSchema), login);
authRoutes.post("/signup", validateSchema(signupSchema), signup);
authRoutes.post("/logout", logout);

authRoutes.get("/refresh", refresh);

export default authRoutes;
