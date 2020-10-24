import { Matter } from '../../entities/Matter';
import { IMattersRepository } from '../IMattersRepository';
import { query } from './Connection';

const createTableQuery = "CREATE TABLE IF NOT EXISTS matters (id VARCHAR(50) PRIMARY KEY, name VARCHAR(50) UNIQUE NOT NULL, teacher VARCHAR(50) NOT NULL)";

query(createTableQuery);

export class PostgresMattersRepository implements IMattersRepository {

    async find(): Promise<Matter[]> {
        const { rows } = await query('SELECT * FROM matters LEFT JOIN tasks ON tasks.matter_id = matters.id');
        
        const matters = rows as Matter[];

        return matters;
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
        await query(`INSERT INTO matters(id, name, teacher) VALUES('${matter.id}', '${matter.name}', '${matter.teacher}')`);
    }
}