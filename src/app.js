import express from "express";
import cors from "cors";
import morgan from "morgan";
import tasksRoutes from "./routes/tasks.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions.js";

const specs = swaggerJSDoc(options);
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(tasksRoutes);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
