import express from "express";
import authRoutes from "@routes/auth/auth.routes";
import taskRoutes from "./task/task.routes";
import verifyJWT from "@/middlewares/verifyJWT";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/task", verifyJWT, taskRoutes);

export default router;
