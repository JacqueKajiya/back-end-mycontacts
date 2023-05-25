import { Repository } from "typeorm"
import { hash } from "bcryptjs";

import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces";
import { userSchemaResponse } from "../schemas/users.schemas";


const createUserService = async (data: TUserRequest): Promise<TUserResponse> => {
    const { email, name, phone, password } = data

    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOne({
        where:{
            email
        }
    })

    if(findUser){
        throw new Error("Email already registered")
    }

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        ...data,
        password: hashedPassword,
    })

    await userRepository.save(user)

    return userSchemaResponse.parse(user)
}

export { createUserService }