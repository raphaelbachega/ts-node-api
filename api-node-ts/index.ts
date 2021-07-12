import express from "express";
import './src/config/config'
import { setupRoutes } from "./src/config/routes";
import { setupMiddlewares } from "./src/utils/middlewares";

const app = express();

setupMiddlewares(app)
setupRoutes(app)

const PORT: string|number = 9090;
app.listen(PORT, () => console.log('Server on port: http://localhost:'.concat(PORT.toString())))