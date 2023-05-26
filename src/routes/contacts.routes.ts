import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schemas";
import { createContactController, deleteContactController, listContactController, updateContactController } from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const contactRoutes = Router()

contactRoutes.use(ensureAuthMiddleware)

contactRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactRoutes.get("", listContactController)
contactRoutes.patch("/:id", ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), updateContactController)
contactRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController)

export { contactRoutes }