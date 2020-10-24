import { uuid } from "uuidv4";
import { Task } from "./Task";

export class Matter {

    public readonly id: string;

    public name: string;
    public teacher: string;
    public tasks: Task[];

    constructor(props: Omit<Matter, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}