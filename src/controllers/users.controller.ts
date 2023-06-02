import { Request, Response } from "express";
import { TUserRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/createUser.service";
import { listUserService } from "../services/listUser.service";

const createUserController = async (req: Request, res: Response)=> {
    
    const data: TUserRequest = req.body
    const newUser = await createUserService(data)

    return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response) => {
    const {id} = res.locals.userId

    const user = await listUserService(id)

    return res.json(user)
}

export { createUserController, listUserController }