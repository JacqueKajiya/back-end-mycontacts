import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { TContactRequest, TContactResponse } from "../interfaces/contacts.interfaces";
import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { contactSchema } from "../schemas/contacts.schemas";

const createContactService = async (data: TContactRequest, userId: string): Promise<TContactResponse> =>{
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const contact: Contact = contactRepository.create({
        ...data,
        user
    })

    await contactRepository.save(contact)

    return contactSchema.parse(contact)
}

export { createContactService }