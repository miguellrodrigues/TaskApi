import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO";

export class CreateTaskUseCase {

    constructor(
        private tasksRepository: ITasksRepository
    ) { }
    
    async execute(data: ICreateTaskRequestDTO) {
        const task = new Task(data);
        
        try {
            await this.tasksRepository.save(task);
        } catch (err) {
            throw new Error(err.message || 'Unexpected error has ocurred');
        }
    }
}