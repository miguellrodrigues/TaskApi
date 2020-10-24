import { Task } from "../../../entities/Task";
import { ITasksRepository } from "../../ITasksRepository";
import { query } from "./Connection";

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

    async save(task: Task): Promise<void> {
        await query(`INSERT INTO tasks (id, name, description, deliveryTime) VALUES ('${task.id}', '${task.name}', '${task.description}', '${task.deliveryTime}')`);
    }
}