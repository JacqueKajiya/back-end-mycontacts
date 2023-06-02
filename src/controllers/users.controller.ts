import { Request, Response } from "express";
import { TUserRequest, TUserUpdateRequest } from "../interfaces/users.interfaces";
import { createUserService } from "../services/createUser.service";
import { listUserService } from "../services/listUser.service";
import { updateUserService } from "../services/updateUser.service";
import { deleteUserService } from "../services/deleteUser.service";

const createUserController = async (req: Request, res: Response)=> {
    
    const data: TUserRequest = req.body
    const newUser = await createUserService(data)

    return res.status(201).json(newUser)
}

const listUserController = async (req: Request, res: Response) => {
    const user = await listUserService()

    return res.json(user)
}

const updateUserController = async (req: Request, res: Response) => {
    const userData = req.body
    const userId = req.params.id

    const updateUser: TUserUpdateRequest = await updateUserService(userData, userId)

    return res.json(updateUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.params.id

    await deleteUserService(userId)

    res.status(204).send()
}

export { createUserController, listUserController, updateUserController, deleteUserController }