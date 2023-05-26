import { Repository } from "typeorm";
import { TContactsResponse } from "../interfaces/contacts.interfaces";
import { Contact } from "../entities/contact.entity";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { contactsSchemaResponse } from "../schemas/contacts.schemas";

const listContactsService = async (userId:string): Promise<TContactsResponse> =>{
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user:User | null = await userRepository.findOneBy({
        id: userId
    })

    if(!user){
        throw new AppError("User not found", 404)
    }

    const contacts: Contact[] = await contactRepository.find({
        where:{
            user: {
                id:user.id
            }
        }
    })

    return contactsSchemaResponse.parse(contacts)
}

export { listContactsService }