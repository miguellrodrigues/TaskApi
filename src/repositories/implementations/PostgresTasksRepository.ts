import { Task } from "../../entities/Task";
import { ITasksRepository } from "../ITasksRepository";
import { query } from "./Connection";

const createTableQuery = "CREATE TABLE IF NOT EXISTS tasks(id VARCHAR(50) PRIMARY KEY, name VARCHAR(50) NOT NULL, description VARCHAR(255) NOT NULL, deliveryTime VARCHAR(255) NOT NULL, matter_id VARCHAR(50), FOREIGN KEY(matter_id) REFERENCES matters(id))";

query(createTableQuery);

export default class PostgresTasksRepository implements ITasksRepository {
    
    async find(): Promise<Task[]> {
        const { rows } = await query('SELECT * FROM tasks');

        return rows as Task[];
    }

    async findById(id: string): Promise<Task> {
        var task: Task = null;

        const { rows } = await query("SELECT * FROM tasks WHERE id='" + id + "'");

        task = rows[0] as Task;

        return task;
    }

     async findByName(name: string): Promise<Task> {
        var task: Task = null;

        const { rows } = await query("SELECT * FROM tasks WHERE name='" + name + "'");

        task = rows[0] as Task;

        return task;
    }

    async findByMatterId(matterId: string): Promise<Task[]> {
        const { rows } = await query("SELECT * FROM tasks WHERE matter_id='" + matterId + "'");

        return rows as Task[];
    }

    async save(task: Task): Promise<void> {
        await query(`INSERT INTO tasks (id, name, description, deliveryTime, matter_id) VALUES ('${task.id}', '${task.name}', '${task.description}', '${task.deliveryTime}', '${task.matter_id}')`);

        /*if (task.files.length > 0) {
            task.files.forEach(async file => {
                await query(`INSERT INTO files(id, url, task_id) VALUES ('${file.id}', '${file.url}', '${task.id}')`)
            });
        }*/
    }
}