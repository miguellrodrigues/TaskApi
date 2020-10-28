import express, {response} from "express";

import "express-async-errors";
import errorHandler from "./errors/handler";

import { router } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandler);

export { app };
