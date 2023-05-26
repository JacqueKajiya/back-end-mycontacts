import { Request, Response, NextFunction } from "express"
import { Repository } from "typeorm"
import { Contact } from "../entities/contact.entity"
import { AppDataSource } from "../data-source"

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) =>{
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contactId: string = req.params.id
    const userId: string = res.locals.userId

    const contact = await contactRepository.findOne({
        where:{
            id: contactId
        },
        relations:{
            user: true
        }
    })

    if(!contact){
        return res.status(404).json({
            message: "Contact not found"
        })
    }

    if(contact.user.id !== userId){
        return res.status(403).json({
            message: "You don't have permissions"
        })
    }

    return next()
}

export { ensureIsOwnerMiddleware }