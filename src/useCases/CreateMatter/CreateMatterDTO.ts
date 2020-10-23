import { Task } from "../../entities/Task";
export interface ICreateMatterRequestDTO {
    name: string;

    teacher: string;

    tasks: Task[]
};