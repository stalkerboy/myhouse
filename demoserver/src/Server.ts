import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";

import express from "express";

import BaseRouter from "./routes";

import "express-async-errors";

import cors from "cors";
// Init express
const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

// // Add APIs
// app.use('/api', BaseRouter);

// // Print API errors
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     logger.error(err.message, err);
//     return res.status(BAD_REQUEST).json({
//         error: err.message,
//     });
// });

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));
// app.get('*', (req: Request, res: Response) => {
//     res.sendFile('index.html', {root: viewsDir});
// });
app.use(cors());

//demoServer
app.use("/", BaseRouter);

// Export express instance
export default app;
