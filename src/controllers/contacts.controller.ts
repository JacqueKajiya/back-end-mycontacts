import { Request, Response } from "express";
import { TContactUpdateRequest } from "../interfaces/contacts.interfaces";
import { updateContactService } from "../services/updateContact.service";
import { createContactService } from "../services/createContact.service";
import { listContactsService } from "../services/listContacts.service";
import { deleteContactService } from "../services/deleteContact.service";

const createContactController = async(req: Request, res: Response) => {
    const userId = res.locals.userId

    const newContact = await createContactService(req.body, userId)

    return res.status(201).json(newContact)
}

const listContactController = async(req: Request, res: Response) => {
    const userId = res.locals.userId
    const contacts = await listContactsService(userId)

    return res.json(contacts)
}

const updateContactController = async(req: Request, res: Response) => {
    const contactId = req.params.id
    const updatedData: TContactUpdateRequest = req.body

    const updatedContact = await updateContactService(updatedData, contactId)

    return res.json(updatedContact)
}

const deleteContactController = async(req: Request, res: Response) => {
    const contactId = req.params.id
    await deleteContactService(contactId)

    res.status(204).send()
}

export { createContactController, listContactController, updateContactController, deleteContactController }