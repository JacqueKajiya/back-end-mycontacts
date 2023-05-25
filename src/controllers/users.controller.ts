import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/createUser.service";

const createUserController = async (req: Request, res: Response)=> {
    
    const data: TUserRequest = req.body
    const newUser = await createUserService(data)

    return res.status(201).json(newUser)
}

export { createUserController }