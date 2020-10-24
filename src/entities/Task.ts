import { uuid } from "uuidv4";
import { TaskFile } from "./TaskFile";

export class Task {
    
    public readonly id: string;

    public name: string;
    public description: string;
    public deliveryTime: string;

    public files: TaskFile[];

    public matter_id: string;

    constructor(props: Omit<Task, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}