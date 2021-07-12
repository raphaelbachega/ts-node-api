import { User } from "../model/entity/user.entity";
import { createConnection, getConnection } from 'typeorm'

export class UserRepository{

    selectAll = async (): Promise<User[]> =>{
        return await getConnection()
        .getRepository(User)
        .find();
    }
}
export default new UserRepository();