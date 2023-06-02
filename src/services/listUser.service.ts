import { Repository } from "typeorm"
import { User } from "../entities/user.entity"
import { AppDataSource } from "../data-source"

const listUserService = async (id:string) =>{
    const userRepository : Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.findOne({
        where: {id},
        relations: { contacts: true}
    })

    return user
}

export { listUserService }