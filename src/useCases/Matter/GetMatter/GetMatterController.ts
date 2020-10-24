import { Request, Response } from 'express';
import { GetMatterUseCase } from './GetMatterUseCase';

export class GetMatterController {

    constructor(
        private getMatterUseCase: GetMatterUseCase
    ) { }
    
    async handle(request: Request, response: Response) {
        const {
            name
        } = request.body;

        const data = {
            name: name,
        }

        try {
            const matter = await this.getMatterUseCase.execute(data);

            return response.status(201).json(matter);
        } catch (err) {
            return response.status(500).json({
                message: err.message || 'Unexpected errors'
            })
        }
    }
};