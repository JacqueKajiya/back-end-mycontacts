import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";
import { TContactResponse, TContactUpdateRequest } from "../interfaces/contacts.interfaces";
import { AppError } from "../errors/AppError";
import { contactSchema } from "../schemas/contacts.schemas";

const updateContactService = async (data: TContactUpdateRequest, contactId: string): Promise<TContactResponse> =>{
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const oldContact: Contact | null = await contactRepository.findOneBy({id: contactId})

    if(!oldContact){
        throw new AppError("Contact not found", 404)
    }

    const newContact = contactRepository.create({
        ...oldContact,
        ...data
    })

    await contactRepository.save(newContact)

    return contactSchema.parse(newContact)
    
}

export { updateContactService }