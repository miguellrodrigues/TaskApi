import { ITasksRepository } from "../../../repositories/ITasksRepository";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO";

export class CreateTaskUserCase {

    constructor(
        private tasksRepository: ITasksRepository
    ) { }
    
    async execute(data: ICreateTaskRequestDTO) {
       
    }
}