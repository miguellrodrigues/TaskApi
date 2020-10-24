import { IGetMatterRequestDTO } from "./GetMatterDTO";
import { getRepository } from "typeorm";
import Matter from "../../database/entities/Matter";

export class GetMatterUseCase {
  async execute(data: IGetMatterRequestDTO) {
    const mattersRepository = getRepository(Matter);

    const matter = await mattersRepository.findOneOrFail(
      {
        name: data.name,
      },
      { relations: ["tasks", "tasks.files"] }
    );

    if (!matter) {
      throw new Error("Matter not exists");
    }

    return matter;
  }

  async find() {
    const mattersRepository = getRepository(Matter);

    const matters = await mattersRepository.find({
      relations: ["tasks", "tasks.files"],
    });

    return matters;
  }
}
