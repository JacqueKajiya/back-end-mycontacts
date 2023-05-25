import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { usersRoutes } from "./routes/users.routes";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";
import { loginRoutes } from "./routes/login.routes";
import { contactRoutes } from "./routes/contacts.routes";

const app: Application = express()
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactRoutes)

app.use(handleAppErrorMiddleware)

export default app;
