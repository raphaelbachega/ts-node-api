import {createConnection} from 'typeorm';
import { User } from '../model/entity/user.entity';

createConnection({

    type:'postgres',
    ssl:{ rejectUnauthorized: false },
    url:'postgres://puusonzlxvsois:34054866241125621c189f2dff4e083b1557b251d35cf6f6328e23e286b88d3f@ec2-52-72-221-20.compute-1.amazonaws.com:5432/da1fo7ddlnhs8g',
    // host:'localhost',
    // database:'nodeAPI',
    // port:3360,
    // username:'cws',
    // password:'@Cwsdigital2021',
    logger:'simple-console',
    logging:'all',
    entities:[
        User
    ]

}).then(async result =>{
    console.log("Banco de dados conectado: ",result.isConnected)
}).catch(e => console.log(e));