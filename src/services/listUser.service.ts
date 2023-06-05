import { Repository } from "typeorm"
import { User } from "../entities/user.entity"
import { AppDataSource } from "../data-source"

const listUserService = async (): Promise<User[]> =>{
    const userRepository : Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.find({
        select:[
            "id",
            "name",
            "email",
            "phone",
            "createdAt",
            "updatedAt"
        ]
    })

    return findUser
}

export { listUserService }