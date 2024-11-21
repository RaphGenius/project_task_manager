import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { initialisationDB } from "./db/initDb";
import authRouter from "./routes/auth.routes";
import { errorBody } from "./utils/response/responseformat";

const app = express();
const PORT = process.env.PORT || 3000;

//@TODO definir origin
app.use(cors()).use(morgan("dev")).use(express.json()).use(cookieParser());

initialisationDB();

app.use("/api/auth", authRouter);

app.use((_, res) => {
  res.status(404).json(errorBody("Impossible d'accéder à cette ressource."));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
