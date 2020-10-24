import { GetMatterUseCase } from "./GetMatterUseCase";
import { GetMatterController } from "./GetMatterController";

const getMatterUseCase = new GetMatterUseCase();

const getMatterController = new GetMatterController(getMatterUseCase);

export { getMatterUseCase, getMatterController };
