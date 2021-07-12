import { Request, Response } from "express";
import userService from "../../service/user.service";

export class UserController {

    selectAll = async (request: Request, response: Response): Promise<void> => {
        try {
            const result = await userService.selectAll();
            return response.status(200).json(result).end();
        } catch (error) {
            return response.status(500).json(error).end();
        }
    }

}
export default new UserController()