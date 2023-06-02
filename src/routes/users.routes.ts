import { Router } from "express";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schemas";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const usersRoutes = Router()

usersRoutes.post("", ensureDataIsValidMiddleware(userSchemaRequest), createUserController)
usersRoutes.get("", ensureAuthMiddleware, listUserController)
usersRoutes.patch("/:id", ensureAuthMiddleware, updateUserController)
usersRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController)

export { usersRoutes }