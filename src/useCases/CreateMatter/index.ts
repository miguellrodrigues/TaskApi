import { PostgresMattersRepository } from "../../repositories/implementations/PostgresMattersRepository";
import { CreateMatterUseCase } from "./CreateMatterUseCase";
import { CreateMatterController } from './CreateMatterController';

const postgresMattersRepository = new PostgresMattersRepository();

const createMatterUseCase = new CreateMatterUseCase(
    postgresMattersRepository
);

const createMatterController = new CreateMatterController(createMatterUseCase);

export { createMatterUseCase, createMatterController }