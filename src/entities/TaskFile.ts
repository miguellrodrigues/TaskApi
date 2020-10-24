import { uuid } from "uuidv4";

export class TaskFile {

    public readonly id: string;
    public url: string;

    public task_id: string;

    constructor(props: Omit<TaskFile, 'id'>, id?: string) {
        if (!id) {
            this.id = uuid();
        }
    }
}