import { Task } from "../entities/Task";

export interface ITasksRepository {

    find(): Promise<Task[]>;

    findById(id: string): Promise<Task>;

    findByName(name: string): Promise<Task>;

    findByMatterId(matterId: string): Promise<Task[]>;

    save(task: Task): Promise<void>;
};