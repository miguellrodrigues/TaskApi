import { Matter } from "../../entities/Matter";
import { IMattersRepository } from "../../repositories/IMattersRepository";
import { ICreateMatterRequestDTO } from "./CreateMatterDTO";

export class CreateMatterUseCase {

    constructor(
        private mattersRepository: IMattersRepository
    ) { }

    async execute(data: ICreateMatterRequestDTO) {
        const matterAlreadyExists = await this.mattersRepository.findByName(data.name);

        if (matterAlreadyExists) {
            throw new Error("Matter already exists");
        }

        const matter = new Matter(data);

        await this.mattersRepository.save(matter);
    }
};