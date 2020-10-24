import { ICreateTaskRequestDTO } from "./CreateTaskDTO";
import { getRepository } from "typeorm";
import Task from "../../database/entities/Task";
import Matter from "../../database/entities/Matter";

export class CreateTaskUseCase {
  async execute(data: ICreateTaskRequestDTO) {
    const tasksRepository = getRepository(Task);
    const mattersRepository = getRepository(Matter);

    try {
      const task = tasksRepository.create(data);

      const matter = await mattersRepository.findOneOrFail(data.matter_id, {
        relations: ["tasks"],
      });

      matter.tasks.push(task);

      await mattersRepository.save(matter);
    } catch (err) {
      throw new Error(err.message || "Unexpected error has ocurred");
    }
  }
}
