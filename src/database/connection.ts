import { createConnection } from "typeorm";

createConnection().then(r => console.log('Sucefully connected '));
