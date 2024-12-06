import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/Routes";
import ReactQueryProvider from "./provider/ReactQueryProvider";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  </StrictMode>
);
