import { Request, Response } from 'express';
import { CreateMatterUseCase } from './CreateMatterUseCase';

export class CreateMatterController {

    constructor(
        private createMatterUseCase: CreateMatterUseCase
    ) { }
    
    async handle(request: Request, response: Response) {
        const {
            name,
            teacher
        } = request.body;

        const data = {
            name: name,
            teacher: teacher,
            tasks: []
        }

        try {
            await this.createMatterUseCase.execute(data);

            return response.status(201).json(data);
        } catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors'
            })
        }
    }
};