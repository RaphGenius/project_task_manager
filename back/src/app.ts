import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { initialisationDB } from "./db/initDb";

const app = express();
const PORT = process.env.PORT || 3000;

//@TODO definir origin
app.use(cors()).use(morgan("dev")).use(express.json()).use(cookieParser());

initialisationDB();

app.use((_, res) => {
  res.status(404).json({ message: "Impossible d'accéder à cette ressource." });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
