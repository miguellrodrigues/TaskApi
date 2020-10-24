import { ITasksRepository } from "../../repositories/ITasksRepository";
import { IGetTaskRequestDTO } from "./GetTaskDTO";

export class GetTaskUseCase {

    constructor(
        private tasksRepository: ITasksRepository
    ) { }

    async execute(data: IGetTaskRequestDTO) {
        const task = this.tasksRepository.findByName(data.name);

        if (!task) {
            throw new Error('Task not exists');
        }

        return task;
    }

    async find() {
        const tasks = await this.tasksRepository.find();

        return tasks;
    }
};