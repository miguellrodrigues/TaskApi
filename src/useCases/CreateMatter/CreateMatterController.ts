import { Request, Response } from 'express';
import { CreateMatterUseCase } from './CreateMatterUseCase';
import * as Yup from 'yup';

export class CreateMatterController {
  constructor(private createMatterUseCase: CreateMatterUseCase) {}

  async handle(request: Request, response: Response) {
    const { name, teacher, classroom } = request.body;

    const data = {
      name: name,
      teacher: teacher,
      classroom: classroom,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      teacher: Yup.string().required(),
      classroom: Yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    try {
      await this.createMatterUseCase.execute(data);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(500).json({
        message: err.message || 'Unexpected errors',
      });
    }
  }
}
