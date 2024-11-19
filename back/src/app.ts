import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

//@TODO definir origin
app.use(cors()).use(morgan("dev")).use(express.json()).use(cookieParser());

app.get("/", (req, res) => {
  res.send("TEST");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
