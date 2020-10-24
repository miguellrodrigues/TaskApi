import { IGetTaskRequestDTO } from "./GetTaskDTO";
import { getRepository } from "typeorm";
import Task from "../../database/entities/Task";

export class GetTaskUseCase {
  async execute(data: IGetTaskRequestDTO) {
    const tasksRepository = getRepository(Task);

    const task = tasksRepository.findOneOrFail(
      { name: data.name },
      { relations: ["files"] }
    );

    if (!task) {
      throw new Error("Task not exists");
    }

    return task;
  }

  async find() {
    const tasksRepository = getRepository(Task);

    const tasks = await tasksRepository.find({
      relations: ["files"],
    });

    return tasks;
  }
}
