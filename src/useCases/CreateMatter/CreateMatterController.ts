import { Request, Response } from 'express';
import { CreateMatterUseCase } from './CreateMatterUseCase';

export class CreateUserController {

    constructor(
        private createMatterUseCase: CreateMatterUseCase
    ) { }
    
    async handle(request: Request, response: Response) {
        const {
            name,
            teacher
        } = request.body;

        try {
            await this.createMatterUseCase.execute({
                name: name,
                teacher: teacher,
                tasks: []
            });

            return response.status(201).send();
        } catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors'
            })
        }
    }
}