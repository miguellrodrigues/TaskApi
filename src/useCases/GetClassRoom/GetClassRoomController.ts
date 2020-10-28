import { Request, Response } from 'express';
import { GetClassRoomUseCase } from './GetClassRoomUseCase';

export class GetClassRoomController {
  constructor(private getClassRoomUseCase: GetClassRoomUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.params;

    const data = { name: name };

    try {
      const classroom = await this.getClassRoomUseCase.execute(data);

      return response.status(200).json(classroom);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }

  async find(request: Request, response: Response) {
    try {
      const classes = await this.getClassRoomUseCase.find();

      return response.status(200).json(classes);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }
}
