import { User } from "../model/entity/user.entity";
import userRepository from "../repository/user.repository";

export class UserService{

    selectAll = async ():Promise<User[]> => {
        try {
            return await userRepository.selectAll();
        } catch (error) {
            throw new Error(error);
        }
    }

}
export default new UserService();