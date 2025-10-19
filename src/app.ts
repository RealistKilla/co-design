import express from "express";
import { repoRoutes } from "./interfaces/routes/gitRepoRoutes";
import { errorHandler } from "./interfaces/middleware/errorHandler";

const app = express();

app.use(express.json());
app.use("/api/repos", repoRoutes);
app.use(errorHandler); // Error handling middleware

export default app;
