import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "@routes/index";
import { errorBody } from "@utils/response/responseformat";

const app = express();

app.use(cors()).use(morgan("dev")).use(express.json()).use(cookieParser());

app.use("/api", routes);

app.use((_, res) => {
  res.status(404).json(errorBody("Impossible d'accéder à cette ressource."));
});

export default app;
