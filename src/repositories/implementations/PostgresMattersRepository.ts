import { Pool, QueryResult } from 'pg';
import { Matter } from '../../entities/Matter';
import { IMattersRepository } from '../IMattersRepository';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
});

pool
    .connect()
    .then(() => console.log('Db sucessfully connected'))
    .catch(err => console.error('connection error', err.stack));

const createTableQuery = "CREATE TABLE IF NOT EXISTS matters (id VARCHAR(50) PRIMARY KEY, name VARCHAR(50) UNIQUE NOT NULL, teacher VARCHAR(50) NOT NULL)";

async function query (query: string) {
    const client = await pool.connect();
    let res: QueryResult<any>;

    try {
        await client.query('BEGIN');

        try {
            res = await client.query(query);

            await client.query('COMMIT');
        } catch (err) {
            await client.query('ROLLBACK');
            throw err;
        }
    } finally {
        client.release();
    }

    return res;
}

query(createTableQuery);

export class PostgresMattersRepository implements IMattersRepository {
    
    async find(): Promise<Matter[]> {
        const { rows } = await query('SELECT * FROM matters');

        return rows as Matter[];
    }

    async findById(id: string): Promise<Matter> {
        var matter: Matter = null;

        const { rows } = await query("SELECT * FROM matters WHERE id='" + id + "'");
        
        matter = rows[0] as Matter;

        return matter;
    }

    async findByName(name: string): Promise<Matter> {
        var matter: Matter = null;

        const { rows } = await query("SELECT * FROM matters WHERE name='" + name + "'");
        
        matter = rows[0] as Matter;

        return matter;

        /*let response;

        try {
            response = await pool.query("SELECT * FROM matters WHERE name='" + name + "'");
        } catch (err) {
            throw err;
        }

        return response.rows[0] as Matter;*/
    }

    async save(matter: Matter): Promise<void> {
        await pool.query(`INSERT INTO matters(id, name, teacher) VALUES('${matter.id}', '${matter.name}', '${matter.teacher}')`);
    }
}