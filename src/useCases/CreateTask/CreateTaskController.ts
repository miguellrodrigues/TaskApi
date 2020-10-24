import { Request, Response } from 'express'; 
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {

    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ) { }
        
    async handle(request: Request, response: Response) {
        const {
            name,
            description,
            deliveryTime,
            files,
            matter_id
        } = request.body;

        const data = {
            name,
            description,
            deliveryTime,
            files,
            matter_id
        }

        try {
            await this.createTaskUseCase.execute(data);

            return response.status(201).json(data);
        } catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected error'
            });
        }
    }
}