import { TaskFile } from "../../entities/TaskFile";

export interface ICreateTaskRequestDTO {
    name: string;
    description: string;
    deliveryTime: string;

    files: TaskFile[];

    matter_id: string;
}