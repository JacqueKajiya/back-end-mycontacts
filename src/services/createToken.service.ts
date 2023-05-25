import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import  jwt  from "jsonwebtoken";
import "dotenv/config"
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { Repository } from "typeorm";

const createTokenService = async ({email, password}: TLoginRequest): Promise<string> => {
    const userRepository : Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where:{
            email
        }
    })

    if(!user){
        throw new AppError("Invalid credentials", 403)
    }

    const passwordValidation = await compare(password, user.password)

    if(!passwordValidation){
        throw new AppError("Invalid credentials", 403)
    }

    const token = jwt.sign(
        {username: user.name},
        process.env.SECRET_KEY!,
        {
            expiresIn:"5h",
            subject: user.id
        }
    )

    return token
}

export { createTokenService }