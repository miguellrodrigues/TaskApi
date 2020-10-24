import PostgresTasksRepository from "../../repositories/implementations/PostgresTasksRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const postgresTasksRepository = new PostgresTasksRepository();

const createTaskUseCase = new CreateTaskUseCase(postgresTasksRepository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskUseCase, createTaskController }