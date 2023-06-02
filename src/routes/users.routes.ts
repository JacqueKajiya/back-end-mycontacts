import { Router } from "express";
import { createUserController, listUserController } from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schemas";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router()

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get("", ensureAuthMiddleware, listUserController)

export { usersRoutes }