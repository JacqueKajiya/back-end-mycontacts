import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { AppError } from "../errors/AppError"
import { TUserResponse, TUserUpdateRequest } from "../interfaces/users.interfaces"
import { userSchema } from "../schemas/users.schemas"

const updateUserService = async (data: TUserUpdateRequest , userId: string): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser: User | null = await userRepository.findOneBy({ id: userId})

    if(!findUser){
        throw new AppError("User not found!", 404)
    }

    const updatedUser = userRepository.create({
        ...findUser,
        ...data
    })

    await userRepository.save(updatedUser)

    return userSchema.parse(updatedUser)
}

export { updateUserService }