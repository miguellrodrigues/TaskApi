import { Client } from 'pg';
import { Matter } from '../../entities/Matter';
import { IMattersRepository } from '../IMattersRepository';

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
});

client
    .connect()
    .then(() => console.log('connected'))
    .catch(err => console.error('connection error', err.stack));

export class PostgresMattersRepository implements IMattersRepository {
    
    async find(): Promise<Matter[]> {
        client.query('SELECT * FROM matters', (error, result) => {
            console.log(result);
        });

        return [];
    }

    findById(id: string): Promise<Matter> {
        throw new Error('Method not implemented.');
    }

    findByName(name: string): Promise<Matter> {
        throw new Error('Method not implemented.');
    }

    save(matter: Matter): Promise<void> {
        throw new Error('Method not implemented.');
    }
}