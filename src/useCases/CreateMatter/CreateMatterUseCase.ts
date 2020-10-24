import { ICreateMatterRequestDTO } from "./CreateMatterDTO";
import { getRepository } from "typeorm";
import Matter from "../../database/entities/Matter";

export class CreateMatterUseCase {
  async execute(data: ICreateMatterRequestDTO) {
    const mattersRepository = getRepository(Matter);

    const matterAlreadyExists = await mattersRepository.findOneOrFail({
      name: data.name,
    });

    if (matterAlreadyExists) {
      throw new Error("Matter already exists");
    }

    try {
      const matter = mattersRepository.create(data);

      await mattersRepository.save(matter);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
