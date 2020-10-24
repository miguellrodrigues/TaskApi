import { Request, Response } from 'express';
import { GetTaskUseCase } from './GetTaskUseCase';

export class GetTaskController {
  constructor(private getTaskUseCase: GetTaskUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.params;

    const data = {
      name,
    };

    try {
      const task = await this.getTaskUseCase.execute(data);

      return response.status(200).json(task);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }

  async find(request: Request, response: Response) {
    try {
      const tasks = await this.getTaskUseCase.find();

      return response.status(200).json(tasks);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }

  async getRemainingTime(request: Request, response: Response) {
    const { id } = request.params;

    try {
      return await this.getTaskUseCase.remainingTime(id);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }
}
