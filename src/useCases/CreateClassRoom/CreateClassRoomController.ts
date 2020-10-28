import { Request, Response } from 'express';
import CreateClassRoomUseCase from './CreateClassRoomUseCase';
import * as Yup from 'yup';

export default class CreateClassRoomController {
  constructor(private createClassRoomUseCase: CreateClassRoomUseCase) {}

  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const data = { name: name };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    try {
      await this.createClassRoomUseCase.execute(data);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }
}
