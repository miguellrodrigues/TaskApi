import { IMattersRepository } from "../../repositories/IMattersRepository";
import { IGetMatterRequestDTO } from "./GetMatterDTO";

export class GetMatterUseCase {

    constructor(
        private mattersRepository: IMattersRepository
    ) { }

    async execute(data: IGetMatterRequestDTO) {
        const matter = await this.mattersRepository.findByName(data.name);

        if (!matter) {
            throw new Error('Matter not exists');
        }

        return matter;
    }

    async find() {
        const matters = await this.mattersRepository.find();

        return matters;
    }
};