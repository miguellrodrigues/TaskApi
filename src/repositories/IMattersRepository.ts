import { Matter } from "../entities/Matter";

export interface IMattersRepository {

    find(): Promise<Matter[]>;

    findById(id: string): Promise<Matter>;

    findByName(name: string): Promise<Matter>;

    save(matter: Matter): Promise<void>;
};