import PostgresTasksRepository from "../../repositories/implementations/PostgresTasksRepository";
import { GetTaskController } from "./GetTaskController";
import { GetTaskUseCase } from "./GetTaskUseCase";

const postgresTasksRepository = new PostgresTasksRepository();

const getTaskUseCase = new GetTaskUseCase(postgresTasksRepository);

const getTasksController = new GetTaskController(getTaskUseCase);

export { getTaskUseCase, getTasksController }