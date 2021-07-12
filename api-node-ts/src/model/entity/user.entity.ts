import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserGender } from '../enum/user.enum';
import { IUser } from '../interfaces/user.i';

@Entity('usuario')
export class User implements IUser{

    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'nome',type:'varchar'})
    nome:string

    @Column({name:'email',type:'varchar'})
    email:string

    @Column({name:'senha',type:'varchar'})
    senha:string

    @Column({name:'data_nasc',type:'varchar'})
    dataNasc:Date

    @Column({name:'genero', type:'enum',enum:UserGender})
    genero:string

    @Column({name:'cpf',type:'varchar'})
    cpf:string

}

export default new User();