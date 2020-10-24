import { GetTaskController } from "./GetTaskController";
import { GetTaskUseCase } from "./GetTaskUseCase";

const getTaskUseCase = new GetTaskUseCase();

const getTasksController = new GetTaskController(getTaskUseCase);

export { getTaskUseCase, getTasksController };
