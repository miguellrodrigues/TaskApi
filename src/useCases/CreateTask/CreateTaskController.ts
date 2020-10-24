import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";
import * as Yup from "yup";

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response) {
    var { name, description, deliveryDate, files, matter_id } = request.body;

    const validateData = {
      name,
      description,
      deliveryDate,
      files,
      matter_id,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      deliveryDate: Yup.string().required(),
      matter_id: Yup.string().required(),
      files: Yup.array(
        Yup.object().shape({
          url: Yup.string().required(),
        })
      ),
    });

    await schema.validate(validateData, {
      abortEarly: false,
    });

    const spl = deliveryDate.split("/");
    let date = new Date(spl[2], --spl[1], spl[0], 23, 59, 0);

    const deliveryTime = String(date.getTime()) as any;

    if (!files) {
      files = [];
    }

    const data = {
      name,
      description,
      deliveryTime,
      files,
      matter_id,
    };

    try {
      await this.createTaskUseCase.execute(data);

      return response.status(201).json(data);
    } catch (err) {
      return response.status(500).json({
        message: err.message || "Unexpected error",
      });
    }
  }
}
