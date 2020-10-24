import { Pool, QueryResult } from 'pg';

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

export { pool, query }