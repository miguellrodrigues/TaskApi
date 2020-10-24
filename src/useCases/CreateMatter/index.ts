import { CreateMatterController } from "./CreateMatterController";
import { CreateMatterUseCase } from "./CreateMatterUseCase";

const createMatterUseCase = new CreateMatterUseCase();

const createMatterController = new CreateMatterController(createMatterUseCase);

export { createMatterUseCase, createMatterController };
