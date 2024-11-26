import express from "express";
import authRoutes from "@routes/auth/auth.routes";
import taskRoutes from "./task/task.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/task", taskRoutes);

export default router;
