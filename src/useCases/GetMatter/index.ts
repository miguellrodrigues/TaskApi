import { PostgresMattersRepository } from "../../repositories/implementations/PostgresMattersRepository";
import { GetMatterUseCase } from "./GetMatterUseCase";
import { GetMatterController } from './GetMatterController';

const postgresMattersRepository = new PostgresMattersRepository();

const getMatterUseCase = new GetMatterUseCase(
    postgresMattersRepository
);

const getMatterController = new GetMatterController(getMatterUseCase);

export { getMatterUseCase, getMatterController }